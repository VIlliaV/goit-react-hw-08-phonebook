import { ContactForm, ContactList, Filter } from 'components/Contacts';

const Phonebook = () => {
  return (
    <div>
      <ContactForm />

      <Filter />
      <ContactList />
    </div>
  );
};

export default Phonebook;
