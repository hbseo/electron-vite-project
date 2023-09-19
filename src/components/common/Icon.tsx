import { classNames } from '@/utils/common';

export const Icon = ({
  size = 16,
  component,
  className,
  ...rest
}: {
  size?: number;
  component: string;
  className?: string;
}) => {
  return (
    <img
      className={classNames('inline', className)}
      style={{ width: `${size}px` }}
      src={component}
      {...rest}
    />
  );
};
