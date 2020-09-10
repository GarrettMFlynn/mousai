import React from 'react'
import { FooterOuter,FooterLeft,FooterRight, FooterCenter, SocialList, SocialImg, Breadcrumb, BreadcrumbLink} from './footer.styled';
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
            <BreadcrumbLink href='/newsletter'>Newsletter</BreadcrumbLink>
            <FlexBreak/>
            <BreadcrumbLink href={"mailto:info@mousaineuro.com"}>Contact</BreadcrumbLink>
            <FlexBreak/>
            <BreadcrumbLink>Sitemap</BreadcrumbLink>
        </FooterRight>
        <FooterRight>
            <BreadcrumbLink>Code of Conduct</BreadcrumbLink>
            <FlexBreak/>
            <BreadcrumbLink>Terms of Service</BreadcrumbLink>
            <FlexBreak/>
            <BreadcrumbLink>Privacy Policy</BreadcrumbLink>
        </FooterRight>
    </FooterOuter>
)

export default Footer