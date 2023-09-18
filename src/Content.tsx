import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from '@/routes';
import { Footer } from '@/components/Footer';

export const Content = () => {
  return (
    <>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element()} />
        ))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer className="absolute bottom-0" />
    </>
  );
};
