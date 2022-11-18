import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-top: 32px;
`;

export const ContactListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 600;
  color: #111827;
`;

export const ContactListButton = styled.button`
  box-sizing: border-box;
  display: block;

  padding: 8px 32px;
  background-color: #111827;
  border: 3px solid #111827;
  border-radius: 4px;
  outline: 0px;

  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  text-transform: uppercase;

  :hover,
  :focus {
    background-color: #6366f1;
  }
`;
