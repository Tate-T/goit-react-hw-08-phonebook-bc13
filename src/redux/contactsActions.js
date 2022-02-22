// import { createAction } from "@reduxjs/toolkit";

// export const actionFilter = createAction('filter');
// export const actionContacts = createAction('contacts');

export const addContact = contact => ({
    type: 'phonebook/addContact',
    payload: contact,
});

export const deleteContact = contact => ({
    type: 'phonebook/deleteContact',
    payload: contact,
});

export const addToFilterState = filter => ({
    type: 'phonebook/addToFilterState',
    payload: filter,
});

export const isThereThisContact = name => ({
    type: 'phonebook/isThereThisContact',
    payload: name,
});

export const findContact = contact => ({
    type: 'phonebook/findContact',
    payload: contact,
});

