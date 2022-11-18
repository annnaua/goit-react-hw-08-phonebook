import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  gap: 8px;
`;

export const Link = styled(NavLink)`
  padding: 8px;

  font-weight: 700;
  color: #111827;
  text-transform: uppercase;

  &.active {
    color: #6366f1;
  }
`;
