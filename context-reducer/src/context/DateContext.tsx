import React from 'react';
import { DateContextType } from '../types/Types';

//The context provides access to the state value and the dispatch method to modify the state
//Default values are set for the context
export const DateContext = React.createContext<DateContextType>({
  state: { today: new Date(), selectedDate: new Date() },
  dispatch: () => {},
});
