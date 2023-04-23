import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const selectFilter = state => state.filter;
export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
