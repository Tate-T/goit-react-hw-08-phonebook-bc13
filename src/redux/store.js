import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

// const reducer = (state = {}, action) => state;

const rootReducer = combineReducers(
    {
        contacts: {
            items: [],
            filter: ''
        }
    }
)

const store = createStore(rootReducer, composeWithDevTools());

export default store;