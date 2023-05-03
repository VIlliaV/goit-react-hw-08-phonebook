import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { default as AppBar } from 'components/AppBar/AppBar';
import leaf from '../../images/leaf.jpg';

export const Layout = () => {
  return (
    <div
      style={{
        // marginTop: '65px',
        height: '100vh',
        backgroundImage: `url(${leaf})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 50%',
      }}
    >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
