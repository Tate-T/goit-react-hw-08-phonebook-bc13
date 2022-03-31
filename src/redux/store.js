import { configureStore } from "@reduxjs/toolkit";
import { сontactsReducer, filterReducer, isLoadingReducer, errorReducer } from './contactsReducer';

export const store = configureStore({
    reducer: {
        contacts: сontactsReducer,
        filter: filterReducer,
        isLoading: isLoadingReducer,
        error: errorReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
    },
    devTools: process.env.NODE_ENV !== 'production', // true
});