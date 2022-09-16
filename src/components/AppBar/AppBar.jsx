import { Box } from 'components/Box';
import { NavItem } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Box as="header" p={2}>
      <Box as="nav" display="flex" gridGap="20px">
        <NavItem to="home">Home</NavItem>
        <NavItem to="movies">Movies</NavItem>
      </Box>
    </Box>
  );
};
