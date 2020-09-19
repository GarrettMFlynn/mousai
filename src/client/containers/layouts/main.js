import React, {useEffect, useState} from "react";
import Nav from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import {siteTitle} from "../../pages/_app";
import fire from "../../fire-config";

export default function Main({ children }) {

    const user = fire.auth().currentUser;
    const [notification, setNotification] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    // Firebase Stuff
    fire.auth()
        .onAuthStateChanged((user) => {
            if (user) {
                setLoggedIn(true)
            } else {
                setLoggedIn(false)
            }
        })

    return (
        <>
            <Nav/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}
