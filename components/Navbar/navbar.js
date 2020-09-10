import Link from 'next/link';
import React, {useRef, useState} from 'react'
import {useOnClickOutside} from "../../src/hooks";
import { StyledNav, AlignRight, InnerList, NavLink,LogoImg} from './navbar.styled';
import {FlexBreak} from '../../containers/layouts/layouts.styled.js';
import ProfileCircle from '../ProfileCircle/profilecircle';
import Burger from '../Burger/burger';
import LoginMenu from '../LoginMenu/loginmenu';
import Menu from '../Menu/menu';
import Button from '../Button/button';



const links = [
    { href: '/our-story', label: 'Our Story' },
    { href: '/projects', label: 'Projects' },
    { href: '/research', label: 'Research' },
    { href: '/contact', label: 'Contact' }
].map(link => {
    link.key = `nav-link-${link.label}`
    return link
})

const Nav = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

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
                    <InnerList>
                        <a href={href}>
                            <NavLink>{label}</NavLink>
                        </a>
                    </InnerList>
                ))}
            </AlignRight>
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
            <AlignRight>
                <ProfileCircle open={open2} setOpen={setOpen2} src={"/images/team/GF.jpg"}/>
                <LoginMenu open={open2} setOpen={setOpen2} />
            </AlignRight>
        </StyledNav>
    )
}

export default Nav