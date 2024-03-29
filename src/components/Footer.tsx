import { Icon } from '@/components/common';
import { classNames } from '@/utils/common';
import homeIcon from '@/assets/svg/home.svg';
import rocketLaunchIcon from '@/assets/svg/rocket-launch.svg';
import calendarIcon from '@/assets/svg/calendar.svg';
import settingIcon from '@/assets/svg/setting.svg';
import { useNavigate } from 'react-router-dom';

const FooterIcon = ({
  path,
  children
}: {
  path: string;
  children: React.ReactNode;
}) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(path);
  };
  return (
    <div
      className="flex h-12 w-14 cursor-pointer flex-col items-center rounded-xl pt-1 duration-300 hover:bg-slate-200 active:bg-slate-400"
      onClick={handleOnClick}
    >
      {children}
    </div>
  );
};

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      className={classNames(
        'p-y-0 flex min-w-full items-center justify-around rounded-xl rounded-b-none border-2 border-solid border-slate-200 p-1',
        className
      )}
    >
      <FooterIcon path="/">
        <Icon size={24} component={homeIcon} />
        <span className="text-xs">홈</span>
      </FooterIcon>
      <FooterIcon path="/vacation">
        <Icon size={24} component={rocketLaunchIcon} />
        <span className="text-xs">휴가</span>
      </FooterIcon>
      <FooterIcon path="/calendar">
        <Icon size={24} component={calendarIcon} />
        <span className="text-xs">일정</span>
      </FooterIcon>
      <FooterIcon path="/setting">
        <Icon size={24} component={settingIcon} />
        <span className="text-xs">설정</span>
      </FooterIcon>
    </footer>
  );
};
