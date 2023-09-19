import { classNames } from '@/utils/common';
import userIcon from '@/assets/svg/user.svg';

export const Avatar = ({
  src,
  size = 20,
  variant = 'rounded',
  className,
  ...rest
}: {
  src?: string;
  size?: number;
  variant?: 'square' | 'rounded';
  className?: string;
}) => {
  const round = variant === 'rounded' ? 'rounded-full' : '';
  return (
    <div className={classNames('inline-block p-2', round, className)}>
      <img style={{ width: `${size}px` }} src={src || userIcon} {...rest} />
    </div>
  );
};
