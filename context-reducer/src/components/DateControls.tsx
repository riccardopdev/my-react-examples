import { useContext } from 'react';
import { DateContext } from '../context/DateContext';
import style from './DateControls.module.scss';
import ACTIONS from '../reducer/Actions';

//Component with controls that allow to modify the selected date
const DateControls = () => {
  const { dispatch } = useContext(DateContext);

  return (
    <section className={style.controlContainer}>
      <button
        className={`${style.control} ${style.dayControl}`}
        onClick={() => dispatch({ type: ACTIONS.UPDATE_DAY, payload: -1 })}
      >
        - 1 day
      </button>
      <button
        className={`${style.control} ${style.dayControl}`}
        onClick={() => dispatch({ type: ACTIONS.UPDATE_DAY, payload: 1 })}
      >
        + 1 day
      </button>
      <button
        className={`${style.control} ${style.monthControl}`}
        onClick={() => dispatch({ type: ACTIONS.UPDATE_MONTH, payload: -1 })}
      >
        - 1 month
      </button>
      <button
        className={`${style.control} ${style.monthControl}`}
        onClick={() => dispatch({ type: ACTIONS.UPDATE_MONTH, payload: 1 })}
      >
        + 1 month
      </button>
      <button
        className={`${style.control} ${style.yearControl}`}
        onClick={() => dispatch({ type: ACTIONS.UPDATE_YEAR, payload: -1 })}
      >
        - 1 year
      </button>
      <button
        className={`${style.control} ${style.yearControl}`}
        onClick={() => dispatch({ type: ACTIONS.UPDATE_YEAR, payload: 1 })}
      >
        + 1 year
      </button>
    </section>
  );
};

export default DateControls;
