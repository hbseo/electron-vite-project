import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes';

export const Content = () => {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element()} />
      ))}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
