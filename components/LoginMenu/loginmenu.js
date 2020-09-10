// Menu.js
import React from 'react';
import { bool } from 'prop-types';
import { StyledLogin } from './loginmenu.styled';
import Link from "next/link";
import Button from '../Button/button';
import {FlexBreak} from "../../containers/layouts/layouts.styled";
import {InnerList} from "../Navbar/navbar.styled";


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
    return (
        <StyledLogin open={open}>
            <h1>Become a muse today.</h1>
            <Button href='/signup' text='Register' type='solid_long'/>
            <Button href='/login' text='Log in' type='long'/>
        </StyledLogin>
    )
}
LoginMenu.propTypes = {
    open: bool.isRequired,
}

export default LoginMenu;