import { Box } from 'components/Box';
import { NavItem } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Box as="header" p={2} mb={3} boxShadow="0px 5px 2px 0px rgba(0,0,0,0.75)">
      <Box as="nav" display="flex" gridGap="20px">
        <NavItem to="home">Home</NavItem>
        <NavItem to="movies">Movies</NavItem>
      </Box>
    </Box>
  );
};
