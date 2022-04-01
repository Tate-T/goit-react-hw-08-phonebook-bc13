import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContactApi, getContactApi, deleteContactApi, filterContactsApi } from "services/mockapi";

export const addContact = createAsyncThunk('contacts/post/:id', async (id, thunkApi) => {
    try {
        const contact = await addContactApi(id);
        return contact;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

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