import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from '@redux-devtools/extension';
// import { configureStore } from "@testing-library/react";
import { rootReducer } from './contactsReducer';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools());

export const persistor = persistStore(store);


// const store = configureStore({
//     reducer: {
//         contacts: {
//             items: contactsReducer, // []
//             filter: filterReducer // ''
//         }
//     },
//     devTools: process.env.NODE_ENV !== 'production', // true
// });

// export default store;
