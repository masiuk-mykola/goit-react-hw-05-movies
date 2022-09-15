import { Box } from 'components/Box';
import { Link } from 'react-router-dom';

export const AppBar = () => {
  return (
    <Box as="header">
      <Box as="nav">
        <Link to="home">Home</Link>
        <Link to="movies">Movies</Link>
      </Box>
    </Box>
  );
};
