import { classNames } from '@/utils/common';
import defaultIcon from '@/assets/svg/user.svg';

export const Avatar = ({
  src,
  rounded = true,
  className
}: {
  src?: string;
  rounded?: boolean;
  className?: string;
}) => {
  const round = rounded ? 'rounded-lg' : '';
  return (
    <img
      className={classNames('h-5 w-5', round, className)}
      src={src || defaultIcon}
    />
  );
};
