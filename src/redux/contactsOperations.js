import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContactApi, getContactApi, deleteContactApi, filterContactsApi } from "services/mockapi";
import { addContactApiRequest, addContactSuccess, addContactError } from './contactsActions';

// спосіб 1:

export const addContact = (contact) => {
    return (dispatch) => {
        dispatch(addContactApiRequest());

        addContactApi(contact)
            .then((data) => dispatch(addContactSuccess(data)))
            .catch((err) => dispatch(addContactError(err.message)));
    }
}

// інший варіант через async thunk:

export const getContacts = createAsyncThunk('contacts/get/:id', async (id, thunkApi) => {
    try {
        const contacts = await getContactApi(id);
        return contacts;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk('contacts/delete/:id', async (id, thunkApi) => {
    try {
        await deleteContactApi(id);
        return id;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const findContact = createAsyncThunk('contacts/get/:id', async (id, thunkApi) => {
    try {
        const contact = await filterContactsApi(id);
        return contact;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});