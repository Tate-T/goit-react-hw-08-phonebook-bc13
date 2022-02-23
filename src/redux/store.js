import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import reducer from './contactsReducer';

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
    reducer: {
        contacts: reducer.сontactsReducer,
        filter: reducer.filterReducer
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production', // true
});