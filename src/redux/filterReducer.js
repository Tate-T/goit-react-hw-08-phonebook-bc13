import { createReducer } from "@reduxjs/toolkit";

const filterReducer = createReducer(50, {
    'filter': (state, action) => state + action.filter,
    // ...
});

export default filterReducer

