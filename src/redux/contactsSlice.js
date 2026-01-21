import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";
import { addContact } from "./contactsOps";
import { deleteContact } from "./contactsOps";
import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "./filtersSlice";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.loading;
export const selectError = (state) => state.error;

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        console.log("Redux payload:", action.payload);
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id,
        );
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase()),
    ),
);
export const contactsReducer = contactsSlice.reducer;
