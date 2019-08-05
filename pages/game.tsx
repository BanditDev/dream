import Game from '../components/Game';
import Layout from '../layouts/Main';
import useRouter from '../lib/useRouter';
import { Access } from '../providers/Access';

const GamePage = () => {
  const router = useRouter();
  const gameId = router.query.id;

  return (
    <Layout streams>
      <Access>
        <Game gameId={gameId} />
      </Access>
    </Layout>
  );
};

export default GamePage;