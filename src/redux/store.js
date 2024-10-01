import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
const { default: rootSlice } = require("./rootSlice");

const reducer = combineReducers({
    root: rootSlice,
});
const store = configureStore({
    reducer,
});

export default store;