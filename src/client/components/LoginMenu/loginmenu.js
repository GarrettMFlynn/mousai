// Menu.js
import React from 'react';
import { useState, useEffect } from 'react';
import { bool } from 'prop-types';
import { StyledLogin, InnerLogin } from './loginmenu.styled';
import Link from "next/link";
import Button from '../Button/button';
import {FlexBreak} from "../../containers/layouts/layouts.styled";
import fire from "../../fire-config";
import BCIStream from "../../components/BCIStream/bcistream";

const links = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/modules', label: 'Modules' },
    { href: '/contact', label: 'Contact' }
].map(link => {
    link.key = `menu-link-${link.label}`
    return link
})

const LoginMenu = ({ open }) => {

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

    const handleLogout = () => {
        fire.auth()
            .signOut()
            .then(() => {
                setNotification('Logged out')
                setTimeout(() => {
                    setNotification('')
                }, 2000)
            });
    }

    return (
        <StyledLogin open={open}>
            <InnerLogin>
                <div>

                    {!loggedIn
                        ?
                        <div>
                            <h1>Become a muse today.</h1>
                            <Button href='/users/register' text='Register' type='solid_long'/>
                            <Button href='/users/login' text='Log in' type='long'/>
                        </div>
                        :
                        <div>
                            <h1>Welcome!</h1>
                            <Button onClick={handleLogout} href='/' text='Logout' type='long'/>
                        </div>
                    }

                    {notification}
                </div>
            </InnerLogin>
        </StyledLogin>
    )
}
LoginMenu.propTypes = {
    open: bool.isRequired,
}

export default LoginMenu;