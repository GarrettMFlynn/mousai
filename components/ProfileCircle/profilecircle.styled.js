// StyledProfile.styled.js
import styled from 'styled-components';

export const StyledProfile = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
  
  img {
  width: 100%;
  border-radius: 30px;
  cursor: pointer;
  }

`;