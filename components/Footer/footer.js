import React from 'react'
import { FooterOuter,FooterLeft,FooterRight, FooterCenter, NavList, FormCont, SocialList, SocialImg, StyledLink, Breadcrumb, NewsletterForm, InputDiv, EmailInput, FormSubmit} from './footer.styled';
import {FlexBreak} from '../../containers/layouts/layouts.styled';
import {keys} from '../../keys'


const links = [
    { href: 'https://twitter.com/mousaineuro', label: 'Twitter', src: '../../icons/twitter.svg'},
    { href: 'https://instagram.com/mousaineuro', label: 'Instagram', src: '../../icons/instagram.svg'},
    { href: 'https://github.com/garrettmflynn/mousai', label: 'Github', src: '../../icons/github.svg'},
    { href: '/404', label: 'Vimeo', src: '../../icons/vimeo.svg'},
    { href: '/404', label: 'Dribble', src: '../../icons/dribble.svg'},
].map(link => {
    link.key = `footer-link-${link.label}`
    return link
})

const Footer = () => (
    <FooterOuter>
        <FooterLeft>
            <SocialList>
                {links.map(({ key, href, label, src }) => (
                    <a key={key} href={href}>
                        <SocialImg alt={label} src={src}/>
                    </a>
                ))}
            </SocialList>
        <FlexBreak/>
        <FooterCenter>
        <Breadcrumb>© 2020 Mousai Neurotechnologies</Breadcrumb>
        </FooterCenter>
        </FooterLeft>
        <FooterRight>
            <Breadcrumb href='/newsletter'>Newsletter</Breadcrumb>
            <FlexBreak/>
            <Breadcrumb href={"mailto:info@mousaineuro.com"}>Contact</Breadcrumb>
            <FlexBreak/>
            <Breadcrumb>Sitemap</Breadcrumb>
        </FooterRight>
        <FooterRight>
            <Breadcrumb>Code of Conduct</Breadcrumb>
            <FlexBreak/>
            <Breadcrumb>Terms of Service</Breadcrumb>
            <FlexBreak/>
            <Breadcrumb>Privacy Policy</Breadcrumb>
        </FooterRight>
    </FooterOuter>
)

export default Footer