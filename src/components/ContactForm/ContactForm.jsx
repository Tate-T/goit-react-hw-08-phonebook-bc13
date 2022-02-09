import { Component } from 'react';
import s from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    handleInputChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    }

    reset = () => {
        this.setState({ name: '', number: '' });
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (this.props.isThereThisContact(this.state.name)) {
            alert(`${this.state.name} already exist`)
            return
        }

        this.props.onSubmit(this.state)
        this.reset()
    }

    render() {

        return (
            <form onSubmit={this.onSubmit}>
                <div className={s.phonebookForm}>
                    <label className={s.title}>Name
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            className={s.input}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label className={s.title}>Number
                        <input
                            type="tel"
                            name="number"
                            value={this.state.number}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            className={s.input}
                            onChange={this.handleInputChange}
                        />
                    </label>
                </div>
                <button type="submit" >Add contact</button>
            </form >
        )
    }
}

export default ContactForm