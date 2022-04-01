import { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import s from './PhonebookView.module.css';
import { useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/contactsOperations';

const Phonebook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    return (
        <div className={s.form}>
            <h1>Phonebook</h1>
            <ContactForm />
            <div className={s.contactsList}>
                <ContactList />
                <Filter />
            </div>
        </div>
    )
}

export default Phonebook;