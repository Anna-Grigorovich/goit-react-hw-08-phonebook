import axios from 'axios';

axios.defaults.baseURL = 'https://64943fad0da866a953676a2d.mockapi.io/contacts';

export async function fetchContacts() {
  const { data } = await axios.get("/");
  return data;
}


export async function fetchDeleteContact (id){
   const { data } = await axios.delete(`/${id}`);
  return data;
};

export async function fetchAddContact (contact) {
   const { data } = await axios.post("/", contact);
  return data;
};

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