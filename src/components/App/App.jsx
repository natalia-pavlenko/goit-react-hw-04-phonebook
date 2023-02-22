import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import { AppText, AppDiv } from './App.styled';

// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('saved')) ?? []
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('contacts useEffect');
    localStorage.setItem('saved', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = ({ name, number }) => {
    const contact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    console.log(contact);
    const existingUser = contacts.find(user => user.name === contact.name);
    if (existingUser) {
      alert(`${contact.name}  is alredy in contacts`);
      return;
    }

    setContacts(prevState => [...prevState, contact]);
  };

  const handelFilterInput = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const renderContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  // const handelDelete = id => {
  //   setContacts(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== id),
  //   }));
  // };

  const handelDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };
  return (
    <>
      <AppDiv>
        <AppText>Phonebook</AppText>
        <ContactForm onSubmit={handleSubmit} />
        <AppText>Contacts</AppText>
        <Filter filter={filter} onChange={handelFilterInput} />
        <ContactsList contacts={renderContacts()} onDelete={handelDelete} />
      </AppDiv>
    </>
  );
};
export default App;
