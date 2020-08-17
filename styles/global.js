// global.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: ${({ theme }) => theme.body};
    font-size: 18px;
    background: ${({ theme }) => theme.midDark};
    color: ${({ theme }) => theme.primaryLight};
  }
  
  p {
    font-size: 1rem;
    line-height: 1.5;
  }
  
  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  a {
     color: ${({ theme }) => theme.aoede};
     text-decoration: none;
     cursor: pointer;
  }
  
  img {
      max-width: 100%;
      display: block;
  }
  
  // Text Container
  section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    flex-basis: 100%;
    padding: ${({ theme }) => theme.vertMargin} ${({ theme }) => theme.horizMargin};

  }
  
  // Text
  
  h1{
    flex-grow: 1;
    font-size: 1.6rem;
    font-weight: normal;
    font-family: ${({ theme }) => theme.header};
    }
    
  h2{
    flex-grow: 1;
    font-size: 1.3rem;
    font-weight: normal;
    font-family: ${({ theme }) => theme.header};
  }
  
  h3{
    flex-grow: 1;
    font-size: 1rem;
    font-weight: normal;
    font-family: ${({ theme }) => theme.header};
  }
  
  h4{
    flex-grow: 1;
    font-size: .7rem;
    font-weight: normal;
    font-family: ${({ theme }) => theme.header};
  }
  `