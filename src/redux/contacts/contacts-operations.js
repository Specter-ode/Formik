import * as api from '../../services/api/contacts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const result = await api.getContacts();
      return result;
    } catch (error) {
      toast.error(`Sorry, request failed. We can't load your contacts.`);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, thunkAPI) => {
    try {
      const result = await api.addNewContact(data);
      return result;
    } catch (error) {
      toast.error(`Sorry, request failed. Try again`);
      return thunkAPI.rejectWithValue(error);
    }
  },
  {
    condition: (data, thunkAPI) => {
      const { contacts } = thunkAPI.getState();
      const isDublicate = contacts.items.find(
        item => item.name.toLowerCase() === data.name.toLowerCase()
      );
      if (isDublicate) {
        toast.error(`${data.name} is already in contacts`, {
          theme: 'colored',
        });
        return false;
      }
    },
  }
);

export const removeContact = createAsyncThunk(
  'contacts/remove',
  async (id, thunkAPI) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch (error) {
      toast.error(
        `Sorry, request failed.Contact has not been deleted. May be you have problems with network`
      );
      return thunkAPI.rejectWithValue(error);
    }
  }
);
