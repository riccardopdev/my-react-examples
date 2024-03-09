import { useContext } from 'react';
import { DateContext } from '../context/DateContext';
import style from './DateControls.module.scss';

//Component with controls that allow to modify the selected date
const DateControls = () => {
  const { selectedDate, setSelectedDate } = useContext(DateContext);

  function updateDate(unit: 'day' | 'month' | 'year', num: number) {
    const updatedDate = new Date(selectedDate);

    switch (unit) {
      case 'day':
        updatedDate.setDate(updatedDate.getDate() + num);
        break;
      case 'month':
        updatedDate.setMonth(updatedDate.getMonth() + num);
        break;
      case 'year':
        updatedDate.setFullYear(updatedDate.getFullYear() + num);
        break;

      default:
        throw new Error('Invalid unit for updating the date');
    }

    setSelectedDate(updatedDate);
  }

  return (
    <section className={style.controlContainer}>
      <button
        className={`${style.control} ${style.dayControl}`}
        onClick={() => updateDate('day', -1)}
      >
        - 1 day
      </button>
      <button
        className={`${style.control} ${style.dayControl}`}
        onClick={() => updateDate('day', 1)}
      >
        + 1 day
      </button>
      <button
        className={`${style.control} ${style.monthControl}`}
        onClick={() => updateDate('month', -1)}
      >
        - 1 month
      </button>
      <button
        className={`${style.control} ${style.monthControl}`}
        onClick={() => updateDate('month', 1)}
      >
        + 1 month
      </button>
      <button
        className={`${style.control} ${style.yearControl}`}
        onClick={() => updateDate('year', -1)}
      >
        - 1 year
      </button>
      <button
        className={`${style.control} ${style.yearControl}`}
        onClick={() => updateDate('year', 1)}
      >
        + 1 year
      </button>
    </section>
  );
};

export default DateControls;
