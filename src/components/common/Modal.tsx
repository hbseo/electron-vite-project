import { classNames } from '@/utils/common';

export const Modal = ({
  open,
  setOpen,
  width = 100,
  height = 200,
  className,
  children
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  width?: number;
  height?: number;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className="absolute left-0 top-0 z-50 h-screen w-screen bg-[rgba(0,0,0,0.5)] transition-all duration-300"
      style={{
        visibility: `${open ? 'visible' : 'hidden'}`,
        opacity: `${open ? '1' : '0'}`
      }}
      data-scope="outer"
      onClick={(e: React.MouseEvent) => {
        if (!(e.target instanceof HTMLDivElement)) {
          return;
        }
        if (e.target.dataset.scope === 'outer') {
          setOpen(false);
        }
      }}
    >
      <div
        className={classNames(
          'max-w-screen absolute left-1/2 top-1/2 z-50 max-h-screen -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg border-black bg-white',
          className
        )}
        data-scope="inner"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {children}
      </div>
    </div>
  );
};
