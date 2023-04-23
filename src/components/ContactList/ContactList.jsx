import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import { selectFilter } from 'redux/filterSlice';
import { fetchContacts } from 'redux/contacts/contactsOperations';

import { Loader } from 'components/Loader/Loader';
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error !== null) {
      toast.error(`Sorry, but ${error} `);
      return;
    }
  }, [error]);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {filterContacts.length !== 0 ? (
        <ul>
          {filterContacts.map(({ id, name, phone, createdAt }) => (
            <ContactItem key={id} contact={{ id, name, phone, createdAt }} />
          ))}
        </ul>
      ) : (
        <p>Please add contact</p>
      )}
      {loading && <Loader />}
    </>
  );
};
