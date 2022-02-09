import { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import shortid from 'shortid';
import s from './Phonebook.module.css';


class Phonebook extends Component {
    state = {
        contacts: [
            { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
            { id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12' },
            { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
            { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: ''
    }

    addContact = contact =>
        this.setState(prevState => ({
            contacts: [...prevState.contacts, { id: shortid.generate(), ...contact }],
        }));

    deleteContact = e => {
        const id = e.target.id;
        this.setState(prev => ({
            contacts: prev.contacts.filter(contact => contact.id !== id),
        }));
    };

    addToFilterState = (e) => {
        const filter = e.target.value;
        this.setState({
            filter: filter,
        });
    }

    isThereThisContact = name =>
        this.state.contacts.some(
            contact => contact.name.toLowerCase() === name.toLowerCase(),
        );

    findContact = () =>
        this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
        );

    render() {
        return (
            <div className={s.form}>
                <h1>Phonebook</h1>
                <ContactForm name={this.state.name} number={this.state.number} onChange={this.handleInputChange} onSubmit={this.addContact}
                    isThereThisContact={this.isThereThisContact}
                    addContact={this.addContact} />
                <div className={s.contactsList}>
                    <ContactList contacts={this.state.contacts} id={this.state.contacts.id} findContact={this.findContact}
                        deleteContact={this.deleteContact} />
                    <Filter filter={this.state.filter} addToFilterState={this.addToFilterState} findContact={this.findContact} handleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}

export default Phonebook