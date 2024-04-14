import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/slice";

export const selectPhonebookContacts = (state) => state.phonebook.contacts;
export const selectPhonebookIsLoading = (state) => state.phonebook.isLoading;
export const selectPhonebookIsError = (state) => state.phonebook.isError;

export const selectFilteredContacts = createSelector(
  [selectPhonebookContacts, selectNameFilter],
  (phonebook, filter) => {
    if (filter.length > 0) {
      return phonebook.filter(
        (contact) =>
          contact.name.toLowerCase().includes(filter.trim().toLowerCase()) ||
          contact.number.includes(filter.trim())
      );
    } else {
      return phonebook;
    }
  }
);
