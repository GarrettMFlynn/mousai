// Burger.styled.js
import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  top: 23px;
  transform: translateY(-0px);
  right: 125px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  @media (min-width: ${({ theme }) => theme.mobile}) {
        display: none;
   }

  &:focus {
    outline: none;
  }

  div {
    width: 30px;
    height: 2px;
    background: ${({ theme, open }) => open ? theme.primaryLight : theme.primaryLight};
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(10px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;