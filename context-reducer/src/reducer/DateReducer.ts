import { DateStateType, ActionType } from '../types/Types';
import ACTIONS from './Actions';

//This reducer provides the otpions to modify the selectedDate value by updating the day, month or year
const reducer = (state: DateStateType, action: ActionType): DateStateType => {
  //Create a new date object with the same value of the selectedDate date object
  const updatedDate = new Date(state.selectedDate);

  switch (action.type) {
    case ACTIONS.UPDATE_DAY:
      updatedDate.setDate(updatedDate.getDate() + action.payload);
      return { today: state.today, selectedDate: updatedDate };

    case ACTIONS.UPDATE_MONTH:
      updatedDate.setMonth(updatedDate.getMonth() + action.payload);
      return { today: state.today, selectedDate: updatedDate };

    case ACTIONS.UPDATE_YEAR:
      updatedDate.setFullYear(updatedDate.getFullYear() + action.payload);
      return { today: state.today, selectedDate: updatedDate };

    default:
      return state;
  }
};

export default reducer;
