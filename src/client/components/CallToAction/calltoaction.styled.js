// calltoaction.styled.js
import styled from 'styled-components';

export const CallContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-basis: 100%;
    background: ${({ theme }) => theme.midDark};
    padding: ${({ theme }) => theme.headingMargin} ${({ theme }) => theme.horizMargin};
`

export const Text = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-basis: 100%;
    background: blue //${({ theme }) => theme.midDark};
    padding: ${({ theme }) => theme.headingMargin} ${({ theme }) => theme.horizMargin};
    flex-grow: 1
`

export const AlignRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-wrap: wrap;
        
        Button {
        flex-basis: 100%;
    }
    }
    
`