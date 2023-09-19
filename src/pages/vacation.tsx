import { Box } from '@/components/common';

export const Page = () => {
  return (
    <>
      <h1 className="my-4 text-xl font-bold">휴가</h1>
      <Box className="bg-slate-200 !p-2 !px-3 hover:!shadow-none">
        <h1 className="font-bold">사용한 휴가</h1>
        <div></div>
      </Box>
    </>
  );
};
