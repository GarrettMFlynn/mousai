// StyledLogin.styled.js
import styled from 'styled-components';

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.base};
  height: 100vh;
  width: 100vw;
  text-align: center;
  padding: ${({ theme }) => theme.horizMargin};
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
  transition: transform 0.5s ease-in-out;
  
  h1{
  flex-grow: 0;
  font-size: 50px;
  }
`;