import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      }),
});

export const contactsReducer = contactsSlice.reducer;

const filtersInitialState = {
  filter: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,

  reducers: {
    filteredContacts: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

export const { filteredContacts } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
