// Layouts.styled.js
import styled from 'styled-components';

export const FlexBreak = styled.div`
    flex-basis: 100%;
    height: 0;
`

export const PostSection = styled.section`
    background: ${({ theme }) => theme.midDark};
`

export const TeamContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
`

export const TeamImg = styled.div`
    flex-grow: 1;
    background: red;
    margin: ${({ theme }) => theme.headingMargin}
`

export const TeamDetails = styled.div`
    flex-grow: 5;
    margin: ${({ theme }) => theme.headingMargin}
`

export const TeamTile = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 100%;
    padding: ${({theme}) => theme.vertMargin};
    color: ${({theme}) => theme.primaryLight};
    cursor: pointer;
    background: ${({theme}) => theme.lowDark};
    border: 2px solid ${({theme}) => theme.midDark};
    transition: 0.5s;
    
    :hover {
        margin-left: ${({theme}) => theme.headingMargin}
    }
    
    p{
    color: ${({theme}) => theme.gray4};
    white-space: pre-wrap;
    }
`

export const BackToHome = styled.div`
    flex-grow: 1;
    padding: ${({ theme }) => theme.vertMargin};
    cursor: pointer;
    background: ${({theme}) => theme.midDark};
`