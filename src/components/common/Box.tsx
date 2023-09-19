import { classNames } from '@/utils/common';

export const Box = ({
  children,
  className,
  ...rest
}:
  | {
      children?: React.ReactNode;
      className?: string;
    }
  | React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={classNames(
        'h-auto w-auto rounded-xl bg-white p-1 transition-shadow duration-300 hover:shadow-[0_0_11px_rgba(0,0,0,0.1)]',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
