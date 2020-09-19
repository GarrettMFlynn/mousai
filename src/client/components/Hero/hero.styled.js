// Hero.styled.js
import styled from 'styled-components';

export const HeroDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.mask}, url(${props => props.img}) no-repeat center fixed;
    width: 100%;
    height: calc(100vh - 50px);
    background-size: cover;
    
    section{
    justify-content: center;
    }
`

export const HeroContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`