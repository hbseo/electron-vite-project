import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from '@/routes';
import { Footer } from '@/components/Footer';
import autoAnimate from '@formkit/auto-animate';
import { useEffect, useRef } from 'react';

export const Content = () => {
  const main = useRef(null);

  useEffect(() => {
    main.current && autoAnimate(main.current);
  }, [main]);

  return (
    <>
      <main
        className="overflow-y-auto p-4"
        ref={main}
        style={{ height: 'calc(100% - 56px)' }}
      >
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element()} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer className="fixed bottom-0 h-14" />
    </>
  );
};
