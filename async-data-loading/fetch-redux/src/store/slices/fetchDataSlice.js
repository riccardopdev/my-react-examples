//This file creates the Redux slice 'loadingState' to manage the state for data loading.
//Then it exports the reducers and actions to be used in the Redux store

import { createSlice } from '@reduxjs/toolkit';

const fetchDataState = {
  loading: false,
  data: [],
  error: {
    error: false,
    message: ''
  }
}

const fetchDataSlice = createSlice({
  name: 'loadingState',
  initialState: fetchDataState,
  reducers: {
    loadData(state) {
      state.loading = true;
      state.data = [];
      state.error.error = false;
      state.error.message = false;
    },
    storeData(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.error.error = false;
      state.error.message = '';
    },
    createError(state, action) {
      state.loading = false;
      state.data = [];
      state.error.error = true;
      state.error.message = action.payload;
    }
  }
});

export const fetchDataReducers = fetchDataSlice.reducer;
export const fetchDataActions = fetchDataSlice.actions;