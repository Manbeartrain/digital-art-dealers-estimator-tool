import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import DataSlice from "./DataSlice";

const reducers = combineReducers({
    DataSlice,
});

const persistConfig = {
    key: "root",
    storage,
    whiteList: ["DataSlice"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export default store;
