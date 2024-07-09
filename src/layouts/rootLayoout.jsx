import React from 'react';
import { Outlet } from 'react-router-dom';


const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;