// Menu.styled.js
import styled from 'styled-components';

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  background: ${({ theme }) => theme.lowDark};
  width: 100%;
  text-align: left;
  padding: ${({ theme }) => theme.horizMargin};
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
  transition: transform .5s ease-in-out;
  }
`;

export const MenuLink = styled.a`
        color: ${({ theme }) => theme.primaryLight};
        flex-grow: 1;
        padding-bottom: 10px;
        margin-right: 20px;
        // letter-spacing: 0.10rem;
        cursor: pointer;
        transition: .5s;
        position: relative;
        
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