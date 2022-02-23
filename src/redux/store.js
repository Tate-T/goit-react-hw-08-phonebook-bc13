import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import reducer from './contactsReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

const middleware = [...getDefaultMiddleware(), logger];
const rootReducer = combineReducers({
    contacts: reducer.сontactsReducer,
    filter: reducer.filterReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production', // true
});

export const persistor = persistStore(store);