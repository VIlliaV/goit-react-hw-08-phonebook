import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const { REACT_APP_BACKEND_URL } = process.env;

axios.defaults.baseURL = REACT_APP_BACKEND_URL;

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
  async (_, { rejectWithValue }) => {
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
      const { data } = await axios.get('users/current');

      return data;
    } catch (error) {
      return rejectWithValue(`Can't login ${error.message}`);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'user/avatar',
  async (file, { rejectWithValue, getState }) => {
    const {
      auth: { token },
    } = getState();

    if (token === null) return rejectWithValue('the user is not logged in');

    try {
      setAuthHeader(token);
      const formData = new FormData();
      formData.append('avatars', file);
      const { data } = await axios.patch('users/avatar', formData, {
        headers: { 'content-type': 'multipart/form-data' },
      });

      return data.avatarURL;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
