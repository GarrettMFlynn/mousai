// Navbar.styled.js
import styled from 'styled-components';

export const StyledNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-basis: 100%;
    background: ${({ theme }) => theme.base};
    padding: 5px 50px;
    position: sticky;
    top: 0;
    height: 75px;
    z-index: 2;
`

export const AlignRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 10;
    }
    
`

export const AlignLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-grow:1;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 0px;
    }
    
`

export const InnerList = styled.div`
   
`


export const NavLink = styled.a`
        color: ${({ theme }) => theme.primaryLight};
        text-decoration: none;
        font-size: 12px;
        font-family: ${({ theme }) => theme.header};
        flex-grow: 1;
        padding-bottom: 10px;
        margin-right: 20px;
        // letter-spacing: 0.10rem;
        cursor: pointer;
        transition: .5s;
        position: relative;
        
    @media (max-width: ${({ theme }) => theme.mobile}) {
        display: none;
    }
        
    &:hover {
        color: ${({ theme }) => theme.aoedeLight};
    }
    
    &:before {
        content: "";
        position: absolute;
        width: 0;
        height: 1px;
        bottom: 0px;
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

export const LogoImg = styled.img`
        height: 50px;
        padding: 5px;
        // border-radius: 40px;
        // background: radial-gradient(${({ theme }) => theme.midDark},${({ theme }) => theme.base});
        cursor: pointer;
`;