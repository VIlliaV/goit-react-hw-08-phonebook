import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContact } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

export const ContactList = () => {
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {filterContacts.length !== 0 ? (
        <ul>
          {filterContacts.map(({ id, name, phone }) => (
            <ContactItem key={id} contact={{ id, name, phone }} />
          ))}
        </ul>
      ) : (
        <p>Please add contact</p>
      )}
    </>
  );
};
