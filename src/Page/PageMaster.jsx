import React from 'react';
import Topbar from '../components/topbar/Topbar';
import Layout from '../Layout/Layout';
import Navbar from '../components/Navbar/Navbar';

const PageMaster = (props) => {
    return (
        <>
            <Layout top={<Topbar/>} right={<Navbar/>}>
                {props.children}
            </Layout>
        </>
    );
};

export default PageMaster;