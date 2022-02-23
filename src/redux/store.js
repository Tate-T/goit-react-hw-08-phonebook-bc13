import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
// import { configureStore } from "@testing-library/react";
import { rootReducer } from './contactsReducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware([])));

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
