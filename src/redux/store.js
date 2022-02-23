import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import * as reducer from './contactsReducer';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistedReducer = persistReducer(persistConfig, reducer.сontactsReducer, reducer.filterReducer);

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
    reducer: {
        contacts: reducer.сontactsReducer,
        filter: reducer.filterReducer
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production', // true
});

// export const persistor = persistStore(store);