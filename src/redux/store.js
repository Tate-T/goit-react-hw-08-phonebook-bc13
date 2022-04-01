import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { сontactsReducer, filterReducer, isLoadingReducer, errorReducer } from './contacts/contactsReducer';
import authReducer from './auth/authSlice';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
];

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

const authPersistReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
    reducer: {
        auth: authPersistReducer,
        contacts: сontactsReducer,
        filter: filterReducer,
        isLoading: isLoadingReducer,
        error: errorReducer
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production', // true
});

export const persistor = persistStore(store);