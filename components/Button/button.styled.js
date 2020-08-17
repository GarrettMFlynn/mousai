// Button.styled.js
import styled from 'styled-components';

export const ButtonStyles = styled.button`  
background: transparent;  
color: ${({ theme }) => theme.aoede};  
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
        color: ${({ theme }) => theme.aoedeLight};
        border-color: ${({ theme }) => theme.aoedeLight};  
    }
    
&:focus {
    outline: none;
}

&.long {
    width: 200px;
}

/* Solid Subclass */  
&.solid {
color: ${({ theme }) => theme.primaryLight};    
background: ${({ theme }) => theme.aoede}
}

&.solid:hover {
background: ${({ theme }) => theme.aoedeLight};  
}

&.solid_long {
width: 200px;
color: ${({ theme }) => theme.primaryLight};    
background: ${({ theme }) => theme.aoede}
}

&.solid_long:hover {
background: ${({ theme }) => theme.aoedeLight};  
}

/* Blank Subclass */  
&.blank {    
color: transparent; 
border:none; 
cursor:auto;
}

`
