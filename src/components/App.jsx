import { Component } from 'react';

import { Container } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts')),
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.length === this.state.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  changeHandler = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  updateContacts = newUser => {
    const { name } = newUser;
    const { contacts } = this.state;
    if (contacts.find(option => option.name === name)) {
      return false;
    }

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newUser] };
    });
    return true;
  };
  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    const filteredContacts = this.filterContacts();
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm updateContacts={this.updateContacts} />
        <h2>Contacts</h2>
        <Filter changeHandler={this.changeHandler} />
        {filteredContacts.length !== 0 ? (
          <ContactList
            filteredContacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        ) : (
          <p>Please add contact</p>
        )}
      </Container>
    );
  }
}