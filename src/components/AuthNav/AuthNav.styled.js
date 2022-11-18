import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  gap: 8px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #111827;

  font-weight: 500;
  color: #ffffff;

  &.active {
    background-color: #6366f1;
  }
`;
