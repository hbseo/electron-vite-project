import { classNames } from '@/utils/common';
import { useCallback } from 'react';

export type CalendarDataType = {
  [key: number]: string;
};

export const Calendar = ({
  data,
  month,
  className
}: {
  data?: CalendarDataType;
  month: Date;
  className?: string;
}) => {
  const currentYear = month.getFullYear();
  const currentMonth = month.getMonth();
  const currentDate = month.getDate();

  const startDay = new Date(currentYear, currentMonth, 0);
  const prevDate = startDay.getDate();
  const prevDay = startDay.getDay();

  const endDay = new Date(currentYear, currentMonth + 1, 0);
  const nextDate = endDay.getDate();
  const nextDay = endDay.getDay();

  console.log(
    `prevDate: ${prevDate} prevDay: ${prevDay} nextDate: ${nextDate} nextDay: ${nextDay}`
  );

  const makePrevDate = useCallback(() => {
    const result = [];
    for (let i = prevDate - prevDay; i <= prevDate; i++) {
      result.push(<div key={i}>{i}</div>);
    }
    return result;
  }, [prevDate, prevDay]);

  const makeNowDate = useCallback(() => {
    const result = [];
    for (let i = 1; i <= nextDate; i++) {
      result.push(<div key={i}>{i}</div>);
    }
    return result;
  }, [nextDate]);

  const makeNextDate = useCallback(() => {
    const result = [];
    for (let i = 1; i <= 6 - nextDay; i++) {
      result.push(<div key={i}>{i}</div>);
    }
    return result;
  }, [nextDay]);

  return (
    <div className={classNames(className)}>
      <ul>
        <li>일</li>
        <li>월</li>
        <li>화</li>
        <li>수</li>
        <li>목</li>
        <li>금</li>
        <li>토</li>
      </ul>
      <div>
        {makePrevDate()}
        {makeNowDate()}
        {makeNextDate()}
      </div>
    </div>
  );
};
