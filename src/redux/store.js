import { configureStore } from "@reduxjs/toolkit";
import {  contactsSlice } from "./contactsSlice";
import { contactsFilter } from "./contactsFilter";

export const store = configureStore({
    reducer: {
  contacts: contactsSlice.reducer,
  filter: contactsFilter.reducer, 
},
}) 



