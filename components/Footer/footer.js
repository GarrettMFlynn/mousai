import React from 'react'
import { FooterOuter,FooterTop,FooterBottom, NavList, FormCont, SocialList, SocialImg, StyledLink, Breadcrumb, NewsletterForm, InputDiv, EmailInput, FormSubmit} from './footer.styled';
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
        <FooterTop>
            <SocialList>
                {links.map(({ key, href, label, src }) => (
                    <a key={key} href={href}>
                        <SocialImg alt={label} src={src}/>
                    </a>
                ))}
            </SocialList>
            <FlexBreak/>
            <FormCont/>
            <NewsletterForm>
                <h3>Sign up for our newsletter.</h3>
                <FlexBreak/>
                <InputDiv action={keys.mailchimp_url} method="POST">
                        <input type="hidden" name="u" value={keys.mailchimp_hidden1}/>
                        <input type="hidden" name="id" value={keys.mailchimp_hidden2}/>
                        <EmailInput type="email" autoCapitalize="off" autoCorrect="off" name="MERGE0" id="MERGE0"
                                       size="25" placeholder="Enter your email address"/>
                        <FormSubmit type="submit" className="formEmailButton" name="submit" value="Subscribe"/>
                </InputDiv>
            </NewsletterForm>
            <FormCont/>
            <FlexBreak/>
                <NavList>
                <h4>For Users</h4>
                <FlexBreak/>
                <StyledLink>Inspire</StyledLink>
                <FlexBreak/>
                <StyledLink>Blog</StyledLink>
                <FlexBreak/>
                <StyledLink>Newsletter</StyledLink>
                <FlexBreak/>
                <StyledLink>Meetups</StyledLink>
                <FlexBreak/>
                <StyledLink>Code of conduct</StyledLink>
                </NavList>
                <NavList>
                    <h4>Company</h4>
                    <FlexBreak/>
                    <StyledLink>About</StyledLink>
                    <FlexBreak/>
                    <StyledLink>Careers</StyledLink>
                    <FlexBreak/>
                    <StyledLink href={"mailto:gflynn@usc.edu"}>Support</StyledLink>
                    <FlexBreak/>
                    <StyledLink>API</StyledLink>
                    <FlexBreak/>
                    <StyledLink>Terms of service</StyledLink>
                    <FlexBreak/>
                    <StyledLink>Privacy policy</StyledLink>
                </NavList>
        </FooterTop>
        <FlexBreak/>
        <FooterBottom>
            <Breadcrumb>Sitemap</Breadcrumb>
            <Breadcrumb>© 2020 Mousai Neurotechnologies</Breadcrumb>
        </FooterBottom>
    </FooterOuter>
)

export default Footer