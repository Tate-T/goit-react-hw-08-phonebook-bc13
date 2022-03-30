import { createReducer } from "@reduxjs/toolkit";
import shortid from 'shortid';
import { addContactApiRequest, addContactSuccess, addContactError } from "./contactsActions";
// import actions from './contactsActions';
import { getContacts, deleteContact, findContact } from './contactsOperations';

const initialState = [
    { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12' },
    { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
    { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' },
];

export const сontactsReducer = createReducer(initialState, {
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [getContacts.fulfilled]: (_, { payload }) => payload,
    [deleteContact.fulfilled]: (state, { payload }) =>
        state.filter(contact => contact.id !== payload)
});

export const isLoadingReducer = createReducer(false, {
    [addContactApiRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,

    // за 2-м варіантом через async thunk:

    [getContacts.pending]: () => true,
    [getContacts.fulfilled]: () => false,
    [getContacts.rejected]: () => false,
    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,
})

export const filterReducer = createReducer('', {
    [findContact]: (_, { payload }) => payload,

});

const setError = (_, { payload }) => payload;
const resetError = () => null;

export const errorReducer = createReducer(null, {
    [addContactError]: setError,
    [addContactApiRequest]: resetError,
    [getContacts.rejected]: setError,
    [getContacts.pending]: resetError,
    [deleteContact.rejected]: setError,
    [deleteContact.pending]: resetError,
});

// export default { сontactsReducer, isLoadingReducer, filterReducer };