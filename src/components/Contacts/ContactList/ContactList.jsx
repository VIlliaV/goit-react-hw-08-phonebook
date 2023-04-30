import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectError,
  selectFilterContacts,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';

import { Loader } from 'components/Loader/Loader';
import { ContactItem } from '..';

export const ContactList = () => {
  const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);
  const filterContacts = useSelector(selectFilterContacts);
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

  return (
    <>
      {filterContacts.length !== 0 ? (
        <ul>
          {filterContacts.map(({ id, name, number }) => (
            <ContactItem key={id} contact={{ id, name, number }} />
          ))}
        </ul>
      ) : (
        <p>Please add contact</p>
      )}
      {loading && <Loader />}
    </>
  );
};
