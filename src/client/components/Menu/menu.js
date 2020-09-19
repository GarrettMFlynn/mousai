// Menu.js
import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu, MenuLink} from './menu.styled';
import Link from "next/link";
import Button from '../Button/button';
import {FlexBreak} from "../../containers/layouts/layouts.styled";


const links = [
    { href: '/', label: 'Home' },
    { href: '/mythology', label: 'Mythology' },
    { href: '/invocations', label: 'Invocations' },
    { href: '/research', label: 'Research' },
    { href: '/contact', label: 'Contact' }
].map(link => {
    link.key = `nav-link-${link.label}`
    return link
})

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            {links.map(({ key, href, label}) => (
                <div key={key}>
                    <Link href={href}>
                        <h1><MenuLink>{label}</MenuLink></h1>
                    </Link>
                </div>
            ))}
        </StyledMenu>
    )
}
Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;