import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

import { Provider } from 'react-redux';
import store from '../store/store';

const Layout = () => {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  )
}

export default Layout