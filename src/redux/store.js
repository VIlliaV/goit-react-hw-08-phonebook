import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { authReducer } from './auth/authSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
