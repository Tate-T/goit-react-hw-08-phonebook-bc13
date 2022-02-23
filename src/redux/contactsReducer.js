// import { createReducer } from "@reduxjs/toolkit";
// import { actionContacts } from './contactsActions';
import { combineReducers } from 'redux';
import shortid from 'shortid';

const initialState = [
    { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12' },
    { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
    { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' },
];

export const сontactsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'phonebook/addContact':
            return [...state, payload]
        case 'phonebook/deleteContact':
            return state.filter(contact => contact.id !== payload)

        default: return state;
    }
}

export const filterReducer = (state = '', { type, payload }) => {
    switch (type) {

        case 'phonebook/addToFilterState':
            return payload

        default: return state;
    }
};

// export const filterReducer = createReducer('', {
//     [actionFilter]: (state, action) => state + action.filter,
//     [actionContacts]: (state, action) => state + action.filterReset
//     // ...
// });

export const rootReducer = combineReducers(
    {
        contacts: сontactsReducer,
        filter: filterReducer
    }
)
