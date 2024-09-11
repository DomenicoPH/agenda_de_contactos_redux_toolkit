import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    contactos: [],
};

export const contactosSlice = createSlice({
    name: 'contactos',
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contactos.push(action.payload);
        },
        removeContact: (state, action) => {
            state.contactos = state.contactos.filter( contacto => contacto.id === action.payload);
        },
    }
})

export const {addContact, removeContact} = contactosSlice.actions;
export default contactosSlice.reducer;