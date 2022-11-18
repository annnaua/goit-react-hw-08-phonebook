import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilteredContacts,
} from 'redux/phonebook/selectors';

import { fetchContacts, deleteContact } from 'redux/phonebook/operations';

import {
  List,
  ContactListItem,
  ContactListButton,
} from './ContactsList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
  console.log(contacts);

  const filterContacts = useSelector(selectFilteredContacts);
  const normalized = filterContacts.toLocaleLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalized)
  );

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {error && (
        <p
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: 'red',
          }}
        >
          Что-то пошло не так...
        </p>
      )}

      {isLoading && !error && (
        <p
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: '#6366f1',
            marginTop: 16,
          }}
        >
          Загрузка...
        </p>
      )}

      {contacts.length > 0 && (
        <List>
          {filteredContacts.map(({ id, name, number }) => {
            return (
              <ContactListItem key={id}>
                <span>{name} :</span>
                <span>{number} </span>
                <ContactListButton
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </ContactListButton>
              </ContactListItem>
            );
          })}
        </List>
      )}
    </>
  );
};
