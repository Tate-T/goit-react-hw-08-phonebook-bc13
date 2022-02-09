import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ findContact, deleteContact }) => {
    return (
        <div className={s.contactsSection}>
            <ul className={s.contactsList} >
                {findContact().map(contact => (
                    <li className={s.contactsItem} key={contact.id}>
                        <p className={s.contactName}>{contact.name}: {contact.number}</p>
                        <button type="button" className={s.deleteBtn} id={contact.id} onClick={deleteContact}>
                            Delete
                        </button>
                    </li>

                ))}
            </ul>
        </div>
    )
}

Contacts.propTypes = {
    findContact: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired,
};

export default ContactList
