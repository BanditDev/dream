import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import * as depthLimit from 'graphql-depth-limit';
import { AuthModule, AuthService } from '@dream/auth-api';
import { UserModule } from '@dream/user-api';
import { ChatModule } from '@dream/chat-api';
import { CommunityModule } from '@dream/community-api';
import { ConnectionModule, ConnectionService } from '@dream/connection-api';
import { SharedModule } from './shared.module';
import { config } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: config,
    }),
    SharedModule,
    GraphQLModule.forRootAsync({
      imports: [AuthModule, ConnectionModule],
      inject: [AuthService, ConnectionService],
      useFactory: async (
        authService: AuthService,
        connectionService: ConnectionService
      ) => ({
        installSubscriptionHandlers: true,
        validationRules: [depthLimit(10)],
        autoSchemaFile: 'schema.gql',
        context: async ({ req, connection }) => {
          if (connection) {
            return connection.context;
          }

          const token = req?.headers?.authorization;
          const { userId, tokenIsInvalid } = await authService.getTokenData(
            token
          );

          return { userId, token, tokenIsInvalid };
        },
        subscriptions: {
          keepAlive: 3000,
          onConnect: async (
            connectionParams: { token?: string },
            _webSocket,
            context
          ) => {
            const token = connectionParams?.token;

            let ipHash;

            const xForwardedFor =
              context.request.headers['x-original-forwarded-for'];

            if (xForwardedFor && typeof xForwardedFor === 'string') {
              const ip = xForwardedFor.split(/\s*,\s*/)[0];
              ipHash = Buffer.from(ip).toString('base64');
            }

            const { userId, tokenIsInvalid } = await authService.getTokenData(
              token
            );

            if (!tokenIsInvalid) {
              const { id: connectionId } = await connectionService.create({
                userId,
                ipHash,
              });

              return {
                userId,
                ipHash,
                connectionId,
                tokenIsInvalid,
              };
            }

            return false;
          },
          onDisconnect: async (_webSocket, context) => {
            const data = await context.initPromise;
            await connectionService.remove(data.connectionId);
          },
        },
      }),
    }),
    AuthModule,
    UserModule,
    ConnectionModule,
    CommunityModule,
    ChatModule,
  ],
})
export class AppModule {}
