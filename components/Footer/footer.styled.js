// Footer.styled.js
import styled from 'styled-components';
import {ButtonStyles} from '../Button/button.styled'

// Footer Containers
export const FooterOuter = styled.div`
    background: ${({ theme }) => theme.base};
    flex-basis: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: ${({ theme }) => theme.headingMargin} ${({ theme }) => theme.navMargin};
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
         padding: ${({ theme }) => theme.headingMargin} 0;
    }
`

export const FooterLeft = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: top;
    flex-wrap: wrap;
    justify-content: center;
    padding: ${({ theme }) => theme.headingMargin} 0;
    background: ${({ theme }) => theme.base};
`

export const FooterCenter = styled.div`
    display: flex;
    align-items: top;
    flex-wrap: wrap;
    justify-content: center;
    background: ${({ theme }) => theme.base};
`

export const FooterRight = styled.div`
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    background: ${({ theme }) => theme.base};
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
         justify-content: center;
    }
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
        font-size: .6rem;
        font-family: ${({ theme }) => theme.body};
        padding: 10px 0px;
        
`

export const BreadcrumbLink = styled(Breadcrumb)`
    position: relative;
    cursor: pointer;
    color: ${({ theme }) => theme.gray4};
    transition: .5s;
    
    &:hover {
    color: ${({ theme }) => theme.aoedeLight};
    }
    
    &:before {
        content: "";
        position: absolute;
        width: 0;
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: ${({ theme }) => theme.primaryLight};
        visibility: hidden;
        transition: all 0.3s ease-in-out;
    }
    &:hover:before {
        visibility: visible;
        width: 100%;
    }
`

export const Link = styled.a`
  display: flex;
  align-items: center;
`;
export const SocialIcon = styled.svg`
  flex: none;
  fill: ${({ theme }) => theme.gray4};
  transition: .5s;
  width: 20px;
  margin: ${({ theme }) => theme.listPadding};
  
  ${Link}:hover & {
    fill: ${({ theme }) => theme.aoedeLight};
  }
`

// Containers
export const NavList = styled.div`
    margin: 0px ${({ theme }) => theme.vertMargin};
`

export const FormCont = styled.div`
    flex-basis: 100%;
    margin: ${({ theme }) => theme.vertMargin};
    // border-top: 2px solid ${({ theme }) => theme.mnemeLight};
    
`

export const SocialList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    flex-basis: 100%;
    
    a {
        position: relative;
        
    }
    
    a:before {
          content: "";
          position: absolute;
          width: 0;
          height: 1px;
          bottom: 0;
          left: 0;
          background-color: ${({ theme }) => theme.primaryLight};
          visibility: hidden;
          transition: all 0.3s ease-in-out;
        }
        
        a:hover:before {
          visibility: visible;
          width: 100%;
        }
`


export const NewsletterForm = styled.div`
        display: flex;
        flex-basis: 100%;
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