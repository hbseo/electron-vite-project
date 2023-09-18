import { classNames } from '@/utils/common';

export const Box = ({
  children,
  className,
  ...rest
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={classNames(
        'h-4 w-4 rounded-xl bg-white p-4 transition-shadow duration-300 hover:shadow-[0_0_11px_rgba(0,0,0,0.1)]',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
