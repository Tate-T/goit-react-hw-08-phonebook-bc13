import { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import shortid from 'shortid';
import s from './Phonebook.module.css';
// import { actionFilter, actionFilterReset } from '../../redux/';

const initialState = [
    { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12' },
    { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
    { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' },
];

const Phonebook = () => {
    const [contacts, setContacts] = useState(initialState);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const contacts = localStorage.getItem('contacts');
        const parcedContacts = JSON.parse(contacts);
        if (parcedContacts) {
            setContacts(parcedContacts);
        }
    }, [])


    const addContact = contact =>
        setContacts(prevState => [...prevState.contacts, { id: shortid.generate(), ...contact }]);

    const deleteContact = e => {
        const id = e.target.id;
        setContacts(prev => prev.filter(contact => contact.id !== id));
    };

    const addToFilterState = (e) => {
        const filter = e.target.value;
        setFilter({ filter: filter });
    }

    const isThereThisContact = name =>
        contacts.some(
            contact => contact.name.toLowerCase() === name.toLowerCase(),
        );

    const findContact = () =>
        contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()),
        );

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts])

    return (
        <div className={s.form}>
            <h1>Phonebook</h1>
            <ContactForm name={contacts.name} number={contacts.number} onSubmitAddContact={addContact}
                isThereThisContact={isThereThisContact}
                addContact={addContact} />
            <div className={s.contactsList}>
                <ContactList contacts={contacts} id={contacts.id} findContact={findContact}
                    deleteContact={deleteContact} />
                <Filter filter={filter} addToFilterState={addToFilterState} findContact={findContact} />
            </div>
        </div>
    )
}

export default Phonebook