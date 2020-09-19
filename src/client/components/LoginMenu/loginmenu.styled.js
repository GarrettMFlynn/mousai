// StyledLogin.styled.js
import styled from 'styled-components';

export const StyledLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.lowDark};
  height: 100vh;
  width: 400px;
  padding: ${({ theme }) => theme.horizMargin};
  position: absolute;
  top: 0;
  right: 0;
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
  transition: transform 0.5s ease-in-out;
  
  h1{
  font-size: 40px;
  }
`;

export const InnerLogin = styled.div`
    
`

