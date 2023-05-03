import { ContactForm, ContactList, Filter } from 'components/Contacts';

const Phonebook = () => {
  return (
    <div>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default Phonebook;
