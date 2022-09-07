import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  removeContact,
  fetchContacts,
} from './contacts-operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterChange: (store, action) => ({
      ...store,
      filter: action.payload,
    }),
  },
  extraReducers: {
    [fetchContacts.pending]: store => ({
      ...store,
      loading: true,
      error: null,
    }),
    [fetchContacts.fulfilled]: (store, { payload }) => ({
      ...store,
      items: payload,
      loading: false,
    }),
    [fetchContacts.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),

    [addContact.pending]: store => ({
      ...store,
      loading: true,
      error: null,
    }),
    [addContact.fulfilled]: (store, { payload }) => {
      return {
        ...store,
        items: [payload, ...store.items],
        loading: false,
      };
    },
    [addContact.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),

    [removeContact.pending]: store => ({
      ...store,
      loading: true,
      error: null,
    }),
    [removeContact.fulfilled]: (store, { payload }) => ({
      ...store,
      items: store.items.filter(item => item.id !== payload),
      loading: false,
    }),
    [removeContact.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
  },
});
export const { filterChange } = contactsSlice.actions;
export default contactsSlice.reducer;
