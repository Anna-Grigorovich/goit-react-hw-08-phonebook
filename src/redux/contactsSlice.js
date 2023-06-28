import { createSlice } from '@reduxjs/toolkit'

import { getAllContacts, addContact, deleteContacts } from './contactsOperation';
const initialState = {
    items: [],
    isLoading: false,
    error: null
  
}  ;

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: bilder => {
    bilder
      .addCase(getAllContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
        state.error = '';
      })
      .addCase(getAllContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
        state.error = '';
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(
          contact => contact.id !== payload.id
        );
        state.error = '';
      })
      .addCase(deleteContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default contactsSlice.reducer;