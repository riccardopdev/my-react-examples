import { useContext } from 'react';
import { DateContext } from '../context/DateContext';
import style from './DateDisplay.module.scss';

//Component to display today's date and the selected date
const DateDisplay = () => {
  const { state } = useContext(DateContext);

  function formatDate(date: Date) {
    return date.toLocaleString('en-AU', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }

  return (
    <section className={style.dateDisplay}>
      <p className={style.label}>Today is:</p>
      <time dateTime={state.today.toISOString()} className={style.today}>
        {formatDate(state.today)}
      </time>
      <hr></hr>
      <p className={style.label}>Your selected date is:</p>
      <time
        dateTime={state.selectedDate.toISOString()}
        className={style.selected}
      >
        {formatDate(state.selectedDate)}
      </time>
    </section>
  );
};

export default DateDisplay;
