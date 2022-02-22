import shortid from 'shortid';
import { createStore } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
// import { configureStore } from "@testing-library/react";
// import { contactsReducer, filterReducer } from './contactsReducer';

const initialState = [
    { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12' },
    { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
    { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' },
];

const ContactsReducer = ({ state = initialState, filter = '', type, payload, name, value }) => {
    switch (type) {
        case 'phonebook/addContact':
            return {
                ...state,
                contact: { id: shortid.generate(), ...payload }
            };

        case 'phonebook/deleteContact':
            return {
                contact: state.filter(contact => contact.id !== e.target.id)
            }

        case 'phonebook/addToFilterState':
            return { filter: e.target.value }

        case 'phonebook/isThereThisContact':
            return state.some(
                contact => contact.name.toLowerCase() === name.toLowerCase(),
            );

        case 'phonebook/findContact':
            return state.filter(contact =>
                contact.name.toLowerCase().includes(filter.toLowerCase()),
            );

        default: return state;
    }
};

// const filterReducer = (state = '', action) => state;

// const rootReducer = combineReducers(
//     {
//         contacts: {
//             items: [],
//             filter: ''
//         }
//     }
// )

const store = createStore(ContactsReducer);

export default store;

// const store = configureStore({
//     reducer: {
//         contacts: {
//             items: contactsReducer, // []
//             filter: filterReducer // ''
//         }
//     },
//     devTools: process.env.NODE_ENV !== 'production', // true
// });

// export default store;
