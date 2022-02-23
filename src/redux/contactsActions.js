// import { createAction } from "@reduxjs/toolkit";
import shortid from 'shortid';

// export const actionFilter = createAction('filter');
// export const actionContacts = createAction('contacts');

export const addContact = contact => ({
    type: 'phonebook/addContact',
    payload: { id: shortid.generate(), ...contact },
});

export const deleteContact = id => ({
    type: 'phonebook/deleteContact',
    payload: id,
});

export const addToFilterState = filter => ({
    type: 'phonebook/addToFilterState',
    payload: filter,
});


