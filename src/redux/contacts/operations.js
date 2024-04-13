import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import {
  requestGetContacts,
  requestAddContact,
  requestDeleteContact,
  requestEditContact,
} from "../../services/api";

export const apiGetUserContacts = createAsyncThunk(
  "phonebook/get",
  async (_, thunkAPI) => {
    try {
      const data = await requestGetContacts();
      return data;
    } catch (err) {
      toast.error("Oooops... Try again later!");
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const apiAddUserContact = createAsyncThunk(
  "phonebook/add",
  async (formData, thunkAPI) => {
    try {
      const data = await requestAddContact(formData);
      return data;
    } catch (err) {
      toast.error("Oooops... Try again later!");
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const apiDeleteUserContact = createAsyncThunk(
  "phonebook/delete",
  async (contactId, thunkAPI) => {
    try {
      const data = await requestDeleteContact(contactId);
      return data;
    } catch (err) {
      toast.error("Oooops... Try again later!");
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const apiEditUserContact = createAsyncThunk(
  "phonebook/edit",
  async (editedContact, thunkAPI) => {
    try {
      const data = await requestEditContact(editedContact);
      return data;
    } catch (err) {
      toast.error("Oooops... Try again later!");
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
