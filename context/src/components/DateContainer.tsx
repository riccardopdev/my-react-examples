import { useState, useRef } from 'react';
import DateDisplay from './DateDisplay';
import DateControls from './DateControls';
import { DateContext } from '../context/DateContext';

const DateContainer = () => {
  const today = useRef<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(() => new Date());

  return (
    <DateContext.Provider
      value={{
        today: today.current,
        selectedDate,
        setSelectedDate,
      }}
    >
      <DateDisplay />
      <DateControls />
    </DateContext.Provider>
  );
};

export default DateContainer;
