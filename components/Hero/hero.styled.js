// Hero.styled.js
import styled from 'styled-components';

export const HeroDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.mask}, url("../../images/livewire.png") no-repeat center fixed;
    width: 100%;
    height: 60vh;
    background-size: cover;
`