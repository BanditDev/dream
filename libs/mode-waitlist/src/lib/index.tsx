import React, { useEffect } from 'react';
import '@dream/utils/axios';
import useAxios from 'axios-hooks';
import { useRouter } from 'next/router';
import {
  useChannelQuery,
  useMeQuery,
  useModeWaitlistQuery,
  useModeWaitlistUpdatedSubscription,
} from '@dream/types';
import { ChannelModeWaitlistProgress } from './progress';
import axios from 'axios';

export const ChannelModeWaitlist = () => {
  const { query } = useRouter();
  const name = typeof query?.channel === 'string' && query?.channel;

  const communityChannelsQuery = useChannelQuery({
    variables: { name },
    skip: !name,
  });

  const channel = communityChannelsQuery?.data?.channel;
  const channelId = channel?.id;

  const modeWaitlistQuery = useModeWaitlistQuery({
    variables: { channelId },
    skip: !channelId,
  });

  const modeWaitlist = modeWaitlistQuery?.data?.modeWaitlist;

  const meQuery = useMeQuery();

  const isSpotifyProfile =
    meQuery?.data?.me?.profiles[0]?.provider === 'spotify';

  useModeWaitlistUpdatedSubscription({
    variables: { channelId },
    skip: !channelId,
    onSubscriptionData: ({ subscriptionData }) => {
      console.log(subscriptionData.data.modeWaitlistUpdated);

      if (!subscriptionData.data) return;

      const modeWaitlistUpdated = subscriptionData.data.modeWaitlistUpdated;

      modeWaitlistQuery.updateQuery((prev) => {
        return {
          ...prev,
          modeWaitlist: {
            ...modeWaitlistUpdated,
          },
        };
      });
    },
  });

  // useEffect(() => {
  //   if (
  //     typeof window !== 'undefined' &&
  //     modeWaitlist?.trackId &&
  //     isSpotifyProfile
  //   ) {
  //     const s = +new Date(+modeWaitlist?.start);
  //     const now = +new Date();

  //     axios
  //       .put('https://api.spotify.com/v1/me/player/play', {
  //         uris: [`spotify:track:${modeWaitlist?.trackId}`],
  //         position_ms: now - s,
  //       })
  //       .then();
  //   }
  // }, [modeWaitlist?.trackId, modeWaitlist?.start, isSpotifyProfile]);

  const [{ data: devices }] = useAxios(
    'https://api.spotify.com/v1/me/player/devices'
  );

  console.log(devices);

  return (
    <div className="h-screen w-full flex flex-1 flex-col">
      <ChannelModeWaitlistProgress
        start={modeWaitlist?.start}
        duration={modeWaitlist?.duration}
        imageUrl={modeWaitlist?.cover}
        artist={modeWaitlist?.artists}
        name={modeWaitlist?.title}
      />
    </div>
  );
};
