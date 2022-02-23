import { createAction } from "@reduxjs/toolkit";
import shortid from 'shortid';

export const addContact = createAction('phonebook/addContact', contact => ({ payload: { id: shortid.generate(), ...contact } }));

export const deleteContact = createAction('phonebook/deleteContact');

export const addToFilterState = createAction('phonebook/addToFilterState');

