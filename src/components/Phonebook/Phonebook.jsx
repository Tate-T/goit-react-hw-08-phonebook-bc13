// import { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import s from './Phonebook.module.css';
// import { actionFilter, actionFilterReset } from '../../redux/';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contactsActions';

export const Phonebook = ({ contacts, filter, addContact, isThereThisContact, findContact, deleteContact, addToFilterState }) => {
    // const [contacts, setContacts] = useState(initialState);
    // const [filter, setFilter] = useState('');

    // useEffect(() => {
    //     const contacts = localStorage.getItem('contacts');
    //     const parcedContacts = JSON.parse(contacts);
    //     if (parcedContacts) {
    //         setContacts(parcedContacts);
    //     }
    // }, [])


    // const addContact = contact =>
    //     setContacts(prevState => [...prevState.contacts, { id: shortid.generate(), ...contact }]);

    // const deleteContact = e => {
    //     const id = e.target.id;
    //     setContacts(prev => prev.filter(contact => contact.id !== id));
    // };

    // const addToFilterState = (e) => {
    //     const filter = e.target.value;
    //     setFilter({ filter: filter });
    // }

    // const isThereThisContact = name =>
    //     contacts.some(
    //         contact => contact.name.toLowerCase() === name.toLowerCase(),
    //     );

    // const findContact = () =>
    //     contacts.filter(contact =>
    //         contact.name.toLowerCase().includes(filter.toLowerCase()),
    //     );

    // useEffect(() => {
    //     localStorage.setItem('contacts', JSON.stringify(contacts))
    // }, [contacts])

    return (
        <div className={s.form}>
            <h1>Phonebook</h1>
            <ContactForm name={contacts.name} number={contacts.number} onSubmitAddContact={() => addContact(contacts.name, contacts.number)}
                isThereThisContact={() => isThereThisContact(contacts.name)}
                addContact={() => addContact(contacts)} />
            <div className={s.contactsList}>
                <ContactList contacts={contacts} id={contacts.id} findContact={() => findContact(contacts)}
                    deleteContact={() => deleteContact(contacts)} />
                <Filter filter={filter} addToFilterState={() => addToFilterState(filter)} findContact={() => findContact(contacts)} />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitAddContact: () => dispatch(contactsActions.addContact()),
        isThereThisContact: () => dispatch(contactsActions.isThereThisContact()),
        addContact: () => dispatch(contactsActions.addContact()),
        findContact: () => dispatch(contactsActions.findContact()),
        deleteContact: () => dispatch(contactsActions.deleteContact()),
        addToFilterState: () => dispatch(contactsActions.addToFilterState()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);