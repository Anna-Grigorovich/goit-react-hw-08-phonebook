import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function fetchDeleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}

export async function fetchAddContact(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, thunkAPI) => {
//     try {
//       const response = await axios.post('/contacts', contact);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// fetchContacts()
