// Features.styled.js
import styled from 'styled-components';

export const HeadDiv = styled.div`
    padding: ${({ theme }) => theme.headingMargin} ${({ theme }) => theme.horizMargin};
    width:100%;
    background: ${({ theme }) => theme.lowDark};
`

export const FeatureDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme.midDark};
`

export const Feature = styled.div`
    flex-basis: 40%;
    flex-grow: 1;
    margin: ${({ theme }) => theme.headingMargin};
`