import React from 'react';
import { DataContextType } from '../types/DataContextType';
import { AppState } from '../state/AppState';

export const DataContext = React.createContext<DataContextType>({
  state: AppState,
  dispatch: () => {},
});
