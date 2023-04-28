import { Helmet } from 'react-helmet';

import book from 'images/book.png';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <Helmet>
        <title>Phonebook</title>
        <meta name="description" content="your best phonebook" />
        <meta property="og:image" content={book} />
      </Helmet>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
