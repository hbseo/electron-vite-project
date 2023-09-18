import { Box } from '@/components/common/Box';
import { classNames } from '@/utils/common';

export const Footer = ({ className }: { className?: string }) => {
  return (
    <Box
      className={classNames(
        'h-12 min-w-full rounded-b-none bg-yellow-400',
        className
      )}
    ></Box>
  );
};
