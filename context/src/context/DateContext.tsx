import React, { SetStateAction } from 'react';

//The data managed by context includes two date objects and a React setState function
type DateContextType = {
  today: Date;
  selectedDate: Date;
  setSelectedDate: React.Dispatch<SetStateAction<Date>>;
};

//Default values are set for the context
export const DateContext = React.createContext<DateContextType>({
  today: new Date(),
  selectedDate: new Date(),
  setSelectedDate: () => new Date(),
});
