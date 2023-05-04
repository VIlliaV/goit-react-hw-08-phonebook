import { ContactForm, ContactList, Filter } from 'components/Contacts';
import { Container } from './Phonebook.styled';

const Phonebook = () => {
  return (
    <Container>
      <div className="left_side">
        <ContactForm />
        <Filter />
      </div>
      <ContactList />
    </Container>
  );
};

export default Phonebook;
