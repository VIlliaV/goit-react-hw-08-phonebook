import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { default as AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <div style={{ marginTop: '65px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
