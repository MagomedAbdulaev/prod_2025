import React from 'react';
import './index.css';
import './reset.css';
import {Outlet} from "react-router-dom";
import Theme from './components/ui/Theme/Theme.jsx';


function Layout(props) {
  return (
    <div className='wrapper'>
        <Theme/>
        <main className='main'>
            <Outlet />
        </main>
    </div>
  );
}

export default Layout;