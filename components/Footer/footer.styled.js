// Footer.styled.js
import styled from 'styled-components';
import {ButtonStyles} from '../Button/button.styled'

// Footer Containers
export const FooterOuter = styled.div`
    background: ${({ theme }) => theme.highDark};
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const FooterTop = styled.div`
    display: flex;
    align-items: top;
    flex-wrap: wrap;
    justify-content: center;
    flex-basis: 100%;
    
    padding: ${({ theme }) => theme.headingMargin} ${({ theme }) => theme.navMargin};
    background: ${({ theme }) => theme.base};
`

export const FooterBottom = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    height: 50px;
    padding: 0px ${({ theme }) => theme.navMargin};
    background: ${({ theme }) => theme.base};
`


// Text
export const StyledLink = styled.a`
        color: ${({ theme }) => theme.aoede};
        text-decoration: none;
        font-size: 10px;
        font-family: ${({ theme }) => theme.body};
        cursor: pointer;
        transition: .5s;
        
    &:hover {
        color: ${({ theme }) => theme.aoedeLight};
    }
`

export const Breadcrumb = styled.a`
        color: ${({ theme }) => theme.gray3};
        font-size: .7rem;
        font-family: ${({ theme }) => theme.body};
        cursor: pointer;
        transition: .5s;
        padding: 0px 10px; 
        
    &:hover {
        color: ${({ theme }) => theme.gray4};
    }
`


// Social Media Icons
export const SocialImg = styled.img`
    filter: invert(75%);
    cursor: pointer;
    margin: ${({ theme }) => theme.listPadding};
    transition: .5s;
    
    &:hover {
        filter: invert(100%);
        // filter: invert(33%) sepia(36%) saturate(7285%) hue-rotate(236deg) brightness(101%) contrast(104%);
    }
`

// Containers
export const NavList = styled.div`
    margin: 0px ${({ theme }) => theme.vertMargin};
`

export const FormCont = styled.div`
    flex-basis: 100%;
    margin: ${({ theme }) => theme.vertMargin};
    border-top: 2px solid ${({ theme }) => theme.mnemeLight};
    
`

export const SocialList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => theme.listPadding};
    flex-grow: 1;
    flex-basis: 100%;
`


export const NewsletterForm = styled.div`
        display: flex;
        flex-basis: 75%;
        justify-content: center;
        align-items: flex-end;
        flex-wrap: wrap;
        border-radius: 10px;
        background: ${({ theme }) => theme.highDark};
        padding: ${({ theme }) => theme.headingMargin};
`

// Interactive Elements
export const InputDiv = styled.form`
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 5px;
        flex-grow: 1;
        background: ${({ theme }) => theme.lowDark};
        color: ${({ theme }) => theme.gray3};
        font-size: 10px;
        font-family: ${({ theme }) => theme.body};
        padding: 0px 0px 0px ${({ theme }) => theme.listPadding};
`

export const EmailInput = styled.input.attrs(props => ({
    type: 'email',
}))`
   background: transparent;
   color: ${({ theme }) => theme.gray4};    
   border: none;
   flex-grow: 1;
   
  ::placeholder {
    color: ${({ theme }) => theme.gray3};
  }
 `

export const FormSubmit = styled.input.attrs(props => ({
    type: 'submit',
}))`
    color: ${({ theme }) => theme.primaryLight};    
    background: ${({ theme }) => theme.aoede};
    font-family: ${({ theme }) => theme.body};  
    font-size: 10px;  
    margin: 5px 5px;  
    width: 100px; 
    height: 30px;
    border: 1px solid ${({ theme }) => theme.aoede};  
    border-radius: 5px;  
    cursor: pointer;
    transition: 0.5s;
    
    &:hover {
    background: ${({ theme }) => theme.aoedeLight};  
}
 `