import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { AppBar } from 'components/AppBar/AppBar';
import ResponsiveAppBar from 'components/AppBarNew/AppBarNew';

export const Layout = () => {
  return (
    <div style={{ marginTop: '65px' }}>
      {/* <AppBar /> */}
      <ResponsiveAppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
