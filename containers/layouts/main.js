import React from 'react'
import Nav from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import {siteTitle} from "../../pages/_app";

export default function Main({ children }) {

    return (
        <>
            <Nav/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}
