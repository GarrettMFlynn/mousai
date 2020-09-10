// StyledProfile.styled.js
import styled from 'styled-components';

export const StyledProfile = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
  
  img {
  width: 25px;
  border-radius: 30px;
  cursor: pointer;
  }

`;