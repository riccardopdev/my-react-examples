import { useReducer } from 'react';
import DateDisplay from './DateDisplay';
import DateControls from './DateControls';
import { dateState } from '../state/state';
import reducer from '../reducer/DateReducer';
import { DateContext } from '../context/DateContext';

const DateContainer = () => {
  const [state, dispatch] = useReducer(reducer, dateState);

  return (
    <DateContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <DateDisplay />
      <DateControls />
    </DateContext.Provider>
  );
};

export default DateContainer;
