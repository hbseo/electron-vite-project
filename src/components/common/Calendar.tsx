import { classNames } from '@/utils/common';
import { useCallback, useState } from 'react';

export const Calendar = ({
  month,
  className,
  action
}: {
  month: Date;
  className?: string;
  action?: ({
    year,
    month,
    day
  }: {
    year: number;
    month: number;
    day: number;
  }) => void;
}) => {
  const currentYear = month.getFullYear();
  const currentMonth = month.getMonth();

  const startDay = new Date(currentYear, currentMonth, 0);
  const prevDate = startDay.getDate();
  const prevDay = startDay.getDay();

  const endDay = new Date(currentYear, currentMonth + 1, 0);
  const nextDate = endDay.getDate();
  // const nextDay = endDay.getDay();

  const [selectedDate, setSelectedDate] = useState<number>(1);

  const handleClickDate = useCallback(
    (date: number) => {
      setSelectedDate(date);
      if (action) {
        action({ year: currentYear, month: currentMonth + 1, day: date });
      }
    },
    [action, currentYear, currentMonth]
  );

  const makePrevDate = useCallback(() => {
    const result = [];
    for (let i = prevDate - prevDay; i <= prevDate; i++) {
      result.push(<div key={i}></div>);
    }
    return result;
  }, [prevDate, prevDay]);

  const makeNowDate = useCallback(() => {
    const result = [];
    for (let i = 1; i <= nextDate; i++) {
      result.push(
        <div
          key={i}
          className={classNames(
            'rounded-md duration-200 hover:bg-slate-200 active:bg-slate-400',
            i === selectedDate && 'bg-slate-200'
          )}
          onClick={() => {
            handleClickDate(i);
          }}
        >
          {i}
        </div>
      );
    }
    return result;
  }, [nextDate, selectedDate, handleClickDate]);

  // const makeNextDate = useCallback(() => {
  //   const result = [];
  //   for (let i = 1; i <= 6 - nextDay; i++) {
  //     result.push(<div key={i}></div>);
  //   }
  //   return result;
  // }, [nextDay]);

  return (
    <div className={classNames(className)}>
      <ul className="mb-1 flex justify-around font-bold">
        <li className="text-red-600">일</li>
        <li>월</li>
        <li>화</li>
        <li>수</li>
        <li>목</li>
        <li>금</li>
        <li className="text-blue-700">토</li>
      </ul>
      <div className="grid grid-cols-7 gap-1 text-center">
        {makePrevDate()}
        {makeNowDate()}
        {/* {makeNextDate()} */}
      </div>
    </div>
  );
};
