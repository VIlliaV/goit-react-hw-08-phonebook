import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const login = createAsyncThunk(
  'user/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/login', user);

      setAuthHeader(data.token);
      console.log('🚀 ~ data:', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signUp = createAsyncThunk(
  'user/signUp',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/signup', user);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'user/logout',
  async (user, { rejectWithValue }) => {
    try {
      await axios.post('users/logout');
      clearAuthHeader();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, { rejectWithValue, getState }) => {
    const {
      auth: { token },
    } = getState();
    if (token === null) return rejectWithValue('the user is not logged in');
    try {
      setAuthHeader(token);
      const { data } = await axios.post('users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
