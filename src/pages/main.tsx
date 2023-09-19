import { Avatar } from '@/components/common/Avatar';
import { Box, Divider } from '@/components/common';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export const Page = () => {
  const navigate = useNavigate();

  const handleOnClickBox = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate]
  );

  return (
    <div className="grid grid-flow-row gap-4">
      <div className="flex flex-row">
        <Avatar size={30} className="bg-slate-600" />
        <div className="mx-2 flex flex-col self-center">
          <span className="text-sm font-semibold">이름</span>
          <span className="text-xs">직급</span>
        </div>
      </div>
      <Box
        className="cursor-pointer bg-slate-100 !p-2 !px-3 hover:shadow-none"
        onClick={() => {
          handleOnClickBox('vacation');
        }}
      >
        <h1 className="font-bold">휴가</h1>
        <div className="flex flex-row">
          <div className="w-1/2 p-1">
            <h2 className="text-sm">쓴</h2>
            <ul className="text-[11px]">
              <li>09.20 ~ 09.24 (5일)</li>
            </ul>
          </div>
          <Divider direction="vertical" className="!border-zinc-300" />
          <div className="w-1/2 p-1">
            <h2 className="text-sm">쓸</h2>
            <ul className="text-[11px]">
              <li>20.09.20 ~ 20.09.24</li>
            </ul>
          </div>
        </div>
      </Box>
    </div>
  );
};
