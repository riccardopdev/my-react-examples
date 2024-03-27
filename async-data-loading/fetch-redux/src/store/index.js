
//This file creates and export the Redux store, and also exports the actions to modify the state

import { configureStore } from '@reduxjs/toolkit';
import { fetchDataActions, fetchDataReducers } from './slices/fetchDataSlice';

const store = configureStore({
  reducer: {
    loadingState: fetchDataReducers
  }
});

export { store, fetchDataActions };