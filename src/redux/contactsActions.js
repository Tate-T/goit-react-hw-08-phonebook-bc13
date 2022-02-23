import { createAction } from "@reduxjs/toolkit";
import shortid from 'shortid';

const addContact = createAction('phonebook/addContact', contact => ({ payload: { id: shortid.generate(), ...contact } }));

const deleteContact = createAction('phonebook/deleteContact');

const addToFilterState = createAction('phonebook/addToFilterState');

export default { addContact, deleteContact, addToFilterState };