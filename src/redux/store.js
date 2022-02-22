import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
// import { configureStore } from "@testing-library/react";
import { ContactsReducer } from './contactsReducer';

// const rootReducer = combineReducers(
//     {
//         contacts: {
//             items: [],
//             filter: ''
//         }
//     }
// )

const store = createStore(ContactsReducer, composeWithDevTools(applyMiddleware([])));

export default store;

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
