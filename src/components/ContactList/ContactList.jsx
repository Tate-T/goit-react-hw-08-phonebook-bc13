import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contactsActions';

const ContactList = ({ filter, contacts, deleteContact }) => {
    const findContact = () => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter?.toLowerCase())
        );
    }

    return (
        <div className={s.contactsSection}>
            <h2 className={s.contactsTitle}>Contacts:</h2>
            <ul className={s.contactsList} >
                {findContact().map(contact => (
                    <li className={s.contactsItem} key={contact.id}>
                        <p className={s.contactName}>{contact.name}: {contact.number}</p>
                        <button type="button" className={s.deleteBtn} onClick={() => deleteContact(contact.id)}>
                            Delete
                        </button>
                    </li>

                ))}
            </ul>
        </div>
    )
}

ContactList.propTypes = {
    deleteContact: PropTypes.func.isRequired,
};


const mapStateToProps = state => {
    return {
        contacts: state.contacts,
        filter: state.filter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteContact: (id) => dispatch(contactsActions.deleteContact(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);


