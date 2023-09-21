import { useEffect, useRef } from 'react';
import { classNames } from '@/utils/common';
import autoAnimate from '@formkit/auto-animate';

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
  const container = useRef(null);

  useEffect(() => {
    container.current && autoAnimate(container.current);
  }, [container]);

  return (
    <>
      {open ? (
        <div
          className="absolute left-0 top-0 z-50 h-screen w-screen bg-[rgba(0,0,0,0.5)]"
          data-scope="outer"
          onClick={(e: React.MouseEvent) => {
            if (!(e.target instanceof HTMLDivElement)) {
              return;
            }
            if (e.target.dataset.scope === 'outer') {
              setOpen(false);
            }
          }}
          ref={container}
        >
          <div
            className={classNames(
              'absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg border-black bg-white',
              className
            )}
            data-scope="inner"
            style={{ width: `${width}px`, height: `${height}px` }}
          >
            {children}
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
