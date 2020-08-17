// Navbar.styled.js
import styled from 'styled-components';

export const StyledNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-basis: 100%;
    background: ${({ theme }) => theme.lowDark};
    padding: 50px;
    position: sticky;
    top: 0;
    height:100px;
    z-index: 1;
`

export const AlignRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-grow:1;
    
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
    @media (max-width: ${({ theme }) => theme.mobile}) {
        display: none;
    }
`

export const NavLink = styled.a`
        color: ${({ theme }) => theme.aoede};
        text-decoration: none;
        font-size: 10px;
        font-family: ${({ theme }) => theme.header};
        flex-grow: 1;
        // letter-spacing: 0.10rem;
        cursor: pointer;
        transition: .5s;
        
    &:hover {
        color: ${({ theme }) => theme.aoedeLight};
    }
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        display: none;
    }
`

export const LogoImg = styled.img`
        height: 75px;
        // border-radius: 40px;
        // background: radial-gradient(${({ theme }) => theme.highDark},${({ theme }) => theme.lowDark});
        cursor: pointer;
`;