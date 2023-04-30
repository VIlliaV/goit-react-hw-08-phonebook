import { createSlice } from '@reduxjs/toolkit';
import { login, signUp } from './authOperations';

// const defaultStatus = {
//   pending: 'pending',
//   fulfilled: 'fulfilled',
//   rejected: 'rejected',
// };

const authInitialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, { payload }) => {
        console.log('🚀 ~ payload:', payload);
        return (state = payload);
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        return (state = payload);
      });
  },
});

export const authReducer = authSlice.reducer;
