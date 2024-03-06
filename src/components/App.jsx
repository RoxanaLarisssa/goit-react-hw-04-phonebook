import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import styles from '../App.module.css';

const SAVED_CONTACTS = 'contact';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const data = localStorage.getItem(SAVED_CONTACTS);

    if (data) {
      setContacts(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(SAVED_CONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  const formSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    if (
      contacts.some(
        i =>
          (i.name.toLowerCase() === contact.name.toLowerCase() &&
            i.number === contact.number) ||
          i.number === contact.number
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(prevContacts => [contact, ...prevContacts]);
    }
  };

  const changeFilterInput = e => {
    setFilter(e.target.value);
  };

  const findContacts = () => {
    const lowercaseFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowercaseFilter)
    );
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <section className={styles.mainSection}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmit} />
      <h2>Contacts</h2>
      <Filter filter={filter} changeFilterInput={changeFilterInput} />
      <ContactList contacts={findContacts()} deleteContact={deleteContact} />
    </section>
  );
};

export default App;
