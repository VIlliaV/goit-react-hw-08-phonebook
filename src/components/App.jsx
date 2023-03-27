import { useState } from 'react';

import { Container } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [isAddContact, setIsAddContact] = useState(false);

  // componentDidMount() {
  //   if (localStorage.getItem('contacts')) {
  //     this.setState({
  //       contacts: JSON.parse(localStorage.getItem('contacts')),
  //     });
  //   }
  // }

  // componentDidUpdate(_, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //     console.log(prevState.contacts, this.state.contacts);
  //   }
  // }

  const changeHandler = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  const updateContacts = newUser => {
    const { name } = newUser;

    if (contacts.find(option => option.name === name)) {
      return false;
    }
    setIsAddContact(true);
    setTimeout(() => {
      setIsAddContact(false);
    }, 1500);
    setContacts(prevState => [...prevState, newUser]);
    return true;
  };

  const deleteContact = id => {
    setContacts(prevState => [prevState.filter(contact => contact.id !== id)]);
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = filterContacts();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm updateContacts={updateContacts} />
      <h2>Contacts</h2>
      <Filter changeHandler={changeHandler} />
      {isAddContact && <p>contact added</p>}
      {filteredContacts.length !== 0 ? (
        <ContactList
          filteredContacts={filteredContacts}
          deleteContact={deleteContact}
        />
      ) : (
        <p>Please add contact</p>
      )}
    </Container>
  );
};

// import { Component } from 'react';

// import { Container } from './App.styled';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// export class App extends Component {
//   state = {
//     contacts: [
//       // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//     isAddContact: false,
//   };

//   componentDidMount() {
//     if (localStorage.getItem('contacts')) {
//       this.setState({
//         contacts: JSON.parse(localStorage.getItem('contacts')),
//       });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//       console.log(prevState.contacts, this.state.contacts);
//     }
//   }

//   changeHandler = ({ target: { value, name } }) => {
//     this.setState({ [name]: value });
//   };

//   updateContacts = newUser => {
//     const { name } = newUser;
//     const { contacts } = this.state;
//     if (contacts.find(option => option.name === name)) {
//       return false;
//     }
//     this.setState({ isAddContact: true });
//     setTimeout(() => {
//       this.setState({ isAddContact: false });
//     }, 1500);
//     this.setState(prevState => {
//       return { contacts: [...prevState.contacts, newUser] };
//     });
//     return true;
//   };
//   deleteContact = id => {
//     this.setState(prevState => {
//       return {
//         contacts: prevState.contacts.filter(contact => contact.id !== id),
//       };
//     });
//   };

//   filterContacts = () => {
//     return this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
//     );
//   };

//   render() {
//     const filteredContacts = this.filterContacts();
//     const { isAddContact } = this.state;
//     return (
//       <Container>
//         <h1>Phonebook</h1>
//         <ContactForm updateContacts={this.updateContacts} />
//         <h2>Contacts</h2>
//         <Filter changeHandler={this.changeHandler} />
//         {isAddContact && <p>contact added</p>}
//         {filteredContacts.length !== 0 ? (
//           <ContactList
//             filteredContacts={filteredContacts}
//             deleteContact={this.deleteContact}
//           />
//         ) : (
//           <p>Please add contact</p>
//         )}
//       </Container>
//     );
//   }
// }
