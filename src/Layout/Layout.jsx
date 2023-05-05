import React from 'react';
import './layout.css';
const Layout = ({ top, right, children }) => {
    return (
        <>

            <div className='layout-top'>
                {top}
            </div>
            <div className='layout-right'>
                {right}
            </div>

            <div className='layout-content'>
                {children}
            </div>

        </>

    );
};

export default Layout;