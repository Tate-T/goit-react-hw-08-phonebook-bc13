import { createReducer } from "@reduxjs/toolkit";
import shortid from 'shortid';
import actions from './contactsActions';
import { combineReducers } from "redux";

const initialState = [
    { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12' },
    { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
    { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' },
];

const сontactsReducer = createReducer(initialState, {
    [actions.addContact]: (state, { payload }) => [...state, payload],
    [actions.deleteContact]: (state, { payload }) =>
        state.filter(contact => contact.id !== payload)
});

const filterReducer = createReducer('', {
    [actions.addToFilterState]: (_, { payload }) => payload,
});

export default combineReducers({ сontactsReducer, filterReducer });