import React from 'react'
import Footer from './Fragments/Footer'
import Header from './Fragments/Header'
import Loader from './Loader'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
    return (
        <>
            {/* <Loader /> */}
            <Header />
            <Outlet />
            <Footer />

        </>
    )
}

export default AppLayout;