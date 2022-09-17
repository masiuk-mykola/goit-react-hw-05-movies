import { Box } from 'components/Box';
import { MoviesList } from '../components/MoviesList/MoviesList';

const Home = () => {
  return (
    <Box as="main" pl={3}>
      <h1>Trending today</h1>
      <MoviesList />
    </Box>
  );
};

export default Home;
