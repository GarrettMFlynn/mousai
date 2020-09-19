import Link from 'next/link';
import React, {useRef, useState} from 'react'
import {useOnClickOutside} from "../../../hooks";
import { StyledNav, AlignRight, InnerList, NavLink,LogoImg} from './navbar.styled';
import {FlexBreak} from '../../containers/layouts/layouts.styled.js';
import ProfileCircle from '../ProfileCircle/profilecircle';
import Burger from '../Burger/burger';
import LoginMenu from '../LoginMenu/loginmenu';
import Menu from '../Menu/menu';
import Button from '../Button/button';



const links = [
    { href: '/mythology', label: 'Mythology' },
    { href: '/invocations', label: 'Invocations' },
    { href: '/research', label: 'Research' },
    { href: '/contact', label: 'Contact' }
].map(link => {
    link.key = `nav-link-${link.label}`
    return link
})

const Nav = () => {
    const [open, setOpen] = useState(false);
    const node1 = useRef();
    useOnClickOutside(node1, () => setOpen(false));

    const [open2, setOpen2] = useState(false);
    const node2 = useRef();
    useOnClickOutside(node2, () => setOpen2(false));

    return(
        <StyledNav>
            <Link href="/">
                <LogoImg
                    src="/brand/long_solid.png"
                    alt="Mousai Neurotechnologies"
                />
            </Link>
            <AlignRight style={{flexGrow:"1"}}>
                {links.map(({ key, href, label}) => (
                    <div key={key}>
                        <Link href={href}>
                            <NavLink>{label}</NavLink>
                        </Link>
                    </div>
                ))}
            </AlignRight>
            <div ref={node1}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
            <AlignRight ref={node2}>
                <ProfileCircle open={open2} setOpen={setOpen2} src={"/brand/mousai_badge.png"}/>
                <LoginMenu open={open2} setOpen={setOpen2} />
            </AlignRight>
        </StyledNav>
    )
}

export default Nav