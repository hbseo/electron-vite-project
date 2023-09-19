import { classNames } from '@/utils/common';

export const Divider = ({
  direction = 'horizontal',
  size = 1,
  className
}: {
  direction?: 'horizontal' | 'vertical';
  size?: number;
  className?: string;
}) => {
  if (direction === 'horizontal') {
    return (
      <div
        className={classNames('border-t border-solid border-black', className)}
        style={{ borderWidth: `${size}px` }}
      ></div>
    );
  } else {
    return (
      <div
        className={classNames('border-l border-solid border-black', className)}
        style={{ borderWidth: `${size}px` }}
      ></div>
    );
  }
};
