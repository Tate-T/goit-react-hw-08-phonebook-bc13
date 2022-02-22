import { createReducer } from "@reduxjs/toolkit";
import { actionContacts, actionFilter } from './contactsActions';

const filterReducer = createReducer('', {
    [actionFilter]: (state, action) => state + action.filter,
    [actionContacts]: (state, action) => state + action.filterReset
    // ...
});

export default filterReducer
