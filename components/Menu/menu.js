// Menu.js
import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './menu.styled';
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

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            {links.map(({ key, href, label}) => (
                <div key={key}>
                    <Link href={href}>
                        <a><h1>{label}</h1></a>
                    </Link>
                </div>
            ))}
            <Button type='blank'/>
            <Button href='/signup' text='Sign up for Mousai' type='solid_long'/>
            <Button href='/login' text='Log in' type='long'/>
        </StyledMenu>
    )
}
Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;