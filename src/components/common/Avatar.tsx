import { classNames } from '@/utils/common';
import userIcon from '@/assets/svg/user.svg';

export const Avatar = ({
  src,
  variant = 'rounded',
  className,
  ...rest
}: {
  src?: string;
  variant?: 'square' | 'rounded';
  className?: string;
}) => {
  const round = variant === 'rounded' ? 'rounded-lg' : '';
  return (
    <img
      className={classNames('h-5 w-5', round, className)}
      src={src || userIcon}
      {...rest}
    />
  );
};
