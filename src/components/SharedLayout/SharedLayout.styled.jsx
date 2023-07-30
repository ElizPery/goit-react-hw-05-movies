import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  padding: 20px 40px;
  box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.5);
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  margin-right: 30px;

  &.active {
    color: crimson;
  }
`;