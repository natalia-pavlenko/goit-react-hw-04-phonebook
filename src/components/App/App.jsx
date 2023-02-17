import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import { AppText, AppDiv } from './App.styled';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = ({ name, number, id }) => {
    const contact = {
      name: name,
      number: number,
      id: nanoid(),
    };
    console.log(contact);
    const existingUser = this.state.contacts.find(
      user => user.name === contact.name
    );
    if (existingUser) {
      alert(`${contact.name}is alredy in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  handelFilterInput = event => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  renderContacts() {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  handelDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;

    return (
      <>
        <AppDiv>
          <AppText>Phonebook</AppText>
          <ContactForm onSubmit={this.handleSubmit} />
          <AppText>Contacts</AppText>
          <Filter filter={filter} onChange={this.handelFilterInput} />
          <ContactsList
            contacts={this.renderContacts()}
            onDelete={this.handelDelete}
          />
        </AppDiv>
      </>
    );
  }
}
