import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Button = styled.button`
  box-sizing: border-box;
  display: block;

  padding: 8px 16px;
  background-color: #111827;

  border-radius: 4px;

  font-size: 16px;
  font-weight: 600;
  color: #ffffff;

  :hover,
  :focus {
    background-color: #6366f1;
  }

  cursor: pointer;
`;
