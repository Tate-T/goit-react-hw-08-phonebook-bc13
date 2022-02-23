import shortid from 'shortid';
// import { createReducer } from "@reduxjs/toolkit";
// import { actionContacts } from './contactsActions';

const initialState = [
    { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12' },
    { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
    { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' },
];

export const ContactsReducer = ({
    state = initialState,
    filter = '',
    type,
    payload,
    name,
    e }) => {
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

// export const filterReducer = () => {

// }

// export const filterReducer = createReducer('', {
//     [actionFilter]: (state, action) => state + action.filter,
//     [actionContacts]: (state, action) => state + action.filterReset
//     // ...
// });

// const rootReducer = combineReducers(
//     {
//         contacts: {
//             items: [],
//             filter: ''
//         }
//     }
// )
