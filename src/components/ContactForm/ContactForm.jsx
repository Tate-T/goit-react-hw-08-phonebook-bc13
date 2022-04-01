import { useState } from 'react';
import s from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsOperations';
import { getContacts } from '../../redux/contacts/contactsSelectors';

const ContactForm = () => {

    const dispatch = useDispatch();

    const isLoading = useSelector(state => state.contacts.isLoading);
    const contacts = useSelector(getContacts);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case "name": setName(value);
                break;
            case "number": setNumber(value);
                break;
            default: return
        }
    }

    const isThereThisContact = (name) => {
        return contacts?.some(
            contact => contact.name.toLowerCase() === name.toLowerCase(),
        );
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (isThereThisContact(name)) {
            alert(`${name} already exist`)
            return
        }

        dispatch(addContact({ name, number }));
        setName('');
        setNumber('')
    }

    return (
        <form onSubmit={onSubmit}>
            <div className={s.phonebookForm}>
                <label className={s.title}>Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        className={s.input}
                        onChange={handleInputChange}
                    />
                </label>
                <label className={s.title}>Number
                    <input
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        className={s.input}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <button type="submit" >Add contact</button>
            {isLoading && <h3>Loading...</h3>}
        </form >
    )
}

export default ContactForm;