import { createSlice } from '@reduxjs/toolkit'
 const initialState = '';
export const contactsFilter = createSlice({
    name: 'filter',
    initialState,
    reducers: {
      filters: (_, { payload }) => payload,
       
    },
  })
export const { filters } = contactsFilter.actions

