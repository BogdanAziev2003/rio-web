// import Footer from 'components/Footer';
import Header from 'components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main>
      <div className="wrapper">
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </main>
  );
};

export default Layout;
