// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
import { configureStore } from "@testing-library/react";
import { contactsReducer, filterReducer } from './contactsReducer';

const store = configureStore({
    reducer: {
        contacts: {
            items: contactsReducer, // []
            filter: filterReducer // ''
        }
    },
    // devTools: process.env.NODE_ENV !== 'production', // true
});

export default store;

// // const reducer = (state = {}, action) => state;

// const rootReducer = combineReducers(
//     {
//         contacts: {
//             items: [],
//             filter: ''
//         }
//     }
// )

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;