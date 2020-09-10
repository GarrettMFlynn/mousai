import Link from 'next/link';
import React, {useRef, useState} from 'react'
import {useOnClickOutside} from "../../src/hooks";
import { StyledNav, AlignRight, AlignLeft, InnerList,NavLink,LogoImg} from './navbar.styled';
import {FlexBreak} from '../../containers/layouts/layouts.styled.js';
import ProfileCircle from '../ProfileCircle/profilecircle';
import Burger from '../Burger/burger';
import LoginMenu from '../LoginMenu/loginmenu';
import Menu from '../Menu/menu';
import Button from '../Button/button';



const links = [
    { href: '/modules', label: 'Modules' },
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
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
            <AlignRight>
                <ProfileCircle/>
                <InnerList>
                    {/*<Button type='blank'/>*/}
                    {/*<FlexBreak/>*/}
                    {/*<Button type='blank'/>*/}
                </InnerList>
            </AlignRight>
                {/*<AlignRight>*/}
                {/*    <InnerList>*/}
                {/*        <Link href='/'>*/}
                {/*            <NavLink>Home</NavLink>*/}
                {/*        </Link>*/}
                {/*    </InnerList>*/}
                {/*    <InnerList>*/}
                {/*        <Link href='/about'>*/}
                {/*            <NavLink>About</NavLink>*/}
                {/*        </Link>*/}
                {/*    </InnerList>*/}
                {/*</AlignRight>*/}
                <Link href="/">
                        <LogoImg
                            src="/brand/long_solid.png"
                            alt="Mousai Neurotechnologies"
                        />
                </Link>
                {/*<AlignLeft>*/}
                {/*    {links.map(({ key, href, label}) => (*/}
                {/*        <InnerList key={key}>*/}
                {/*            <Link href={href}>*/}
                {/*                <NavLink>{label}</NavLink>*/}
                {/*            </Link>*/}
                {/*        </InnerList>*/}
                {/*    ))}*/}
                {/*</AlignLeft>*/}
                <AlignRight>
                    <ProfileCircle open={open2} setOpen={setOpen2} src={"/images/team/GF.jpg"}/>
                    <LoginMenu open={open2} setOpen={setOpen2} />
                    <InnerList>
                        {/*<Button href='/signup' text='Sign up' type='solid'/>*/}
                        {/*<FlexBreak/>*/}
                        {/*<Button href='/login' text='Log in'/>*/}
                    </InnerList>
                </AlignRight>
        </StyledNav>
    )
}

export default Nav