import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  color: tomato;
  text-decoration: none;

  &.active {
    color: blue;
  }

  :hover:not(.active),
  :focus:not(.active) {
    color: black;
  }
`;
