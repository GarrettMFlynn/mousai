// Menu.styled.js
import styled from 'styled-components';

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  background: ${({ theme }) => theme.midDark};
  height: 100vh;
  width: 350px;
  text-align: left;
  padding: ${({ theme }) => theme.horizMargin};
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  
  // @media (max-width: ${({ theme }) => theme.mobile}) {
  //   width: 100%;
  // }

  a {
    font-family:${({ theme }) => theme.heading};
    cursor: pointer;
    color: ${({ theme }) => theme.primaryLight};
    transition: color 0.3s linear;
    
    // @media (max-width: ${({ theme }) => theme.mobile}) {
    //   text-align: center;
    // }
    
    &:hover {
      color: ${({ theme }) => theme.aoede};
    }
  }
`;