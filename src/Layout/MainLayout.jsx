import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './../pages/Shared/Navbar';
import Footer from '../pages/Shared/Footer';

const MainLayout = () => {
    return (
        <div>
           <div className='fixed z-40 w-full'>
            <Navbar></Navbar>
           </div>
            {/* this is a dynamic part */}
            <div className='z-10 py-18'>
            <Outlet></Outlet>
            </div>
           
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;