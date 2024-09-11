import { configureStore } from "@reduxjs/toolkit";
import contactosReducer from './contactosSlice'

const store = configureStore({
    reducer: {
        contactos: contactosReducer,
    }
});

export default store;