import { Layout } from '@/layouts/page.layout';
import { Calendar } from '@/components/common';

export const Page = () => {
  const date = new Date();
  const utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  const kstGap = 9 * 60 * 60 * 1000;
  const today = new Date(utc + kstGap);

  const thisMonth = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const test = ({
    year,
    month,
    day
  }: {
    year: number;
    month: number;
    day: number;
  }) => {
    console.log(year, month, day);
  };
  return (
    <Layout>
      <h1 className="text-xl font-bold">일정</h1>
      <Calendar month={thisMonth} action={test} />
    </Layout>
  );
};
