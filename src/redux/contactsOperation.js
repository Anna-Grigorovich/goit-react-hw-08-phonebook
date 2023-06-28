import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchContacts, fetchDeleteContact, fetchAddContact } from 'service/contact-api'

export const getAllContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_,  { rejectWithValue }) => {
   try {
       const contacts = await fetchContacts();
       return contacts;
   } catch (error) {
     return rejectWithValue(error);
   }
  }
)

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const contacts = await fetchAddContact(contactId);
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId,{ rejectWithValue }) => {
    try {
      const contacts = fetchDeleteContact(contactId); 
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
