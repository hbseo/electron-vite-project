import { Box, Icon } from '@/components/common';
import { Layout } from '@/layouts/page.layout';
import plusIcon from '@/assets/svg/plus.svg';

const Item = () => {
  return (
    <ul>
      <div className="flex justify-between text-xs">
        <div>20.09.20 ~ 20.09.24</div>
        <div>(5 일)</div>
      </div>
    </ul>
  );
};

export const Page = () => {
  return (
    <Layout>
      <h1 className="text-xl font-bold">휴가</h1>
      <Box className="bg-slate-100 !p-2 !px-3 hover:!shadow-none">
        <div className="flex justify-between">
          <h1 className="font-bold">사용한 휴가</h1>
        </div>
        <ul className="mt-1 grid gap-y-1">
          <Item />
          <Item />
          <Item />
        </ul>
        <div className="mt-1 flex h-5 justify-center rounded-lg duration-300 hover:bg-slate-200 active:bg-slate-300">
          <Icon component={plusIcon} />
        </div>
      </Box>
      <Box className="bg-slate-100 !p-2 !px-3 hover:!shadow-none">
        <div className="flex justify-between">
          <h1 className="font-bold">휴가 계획</h1>
        </div>
        <ul className="mt-1 grid gap-y-1">
          <Item />
          <Item />
          <Item />
        </ul>
        <div className="mt-1 flex h-5 justify-center rounded-lg duration-300 hover:bg-slate-200 active:bg-slate-300">
          <Icon component={plusIcon} />
        </div>
      </Box>
    </Layout>
  );
};
