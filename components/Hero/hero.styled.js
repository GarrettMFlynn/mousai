// Hero.styled.js
import styled from 'styled-components';

export const HeroDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.mask}, url("../../images/muse.jpg") no-repeat center fixed;
    width: 100%;
    height: calc(100vh - 50px);
    background-size: cover;
    
    section{
    justify-content: center;
    
        h1{
            text-align: center;
        }
    }
`