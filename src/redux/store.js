import { configureStore } from "@reduxjs/toolkit";
import * as reducer from './contactsReducer';

export const store = configureStore({
    reducer: {
        contacts: reducer.сontactsReducer,
        filter: reducer.filterReducer
    },
    devTools: process.env.NODE_ENV !== 'production', // true
});