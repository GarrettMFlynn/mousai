// ProjectList.styled.js
import styled from 'styled-components';

// Unique Elements
export const ModuleSection = styled.section`
    background: ${({ theme }) => theme.base};
`

export const LargeHeading = styled.h2`
    font-size: 1.5rem;
    line-height: 1.4;
    margin: 1rem 0;
    flex-basis: 100%;
`

export const List = styled.div`
    list-style: none;
    flex-grow: 1;
`

export const ListItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-basis: 100%;
    flex-grow: 1;
    margin-bottom: ${({ theme }) => theme.headingMargin};
    border: 2px solid  ${({ theme }) => theme.midDark};
    padding: 10px 10px;
    border-radius:5px;
    background: ${({ theme }) => theme.lowDark};
    transition: .5s;
    overflow: hidden;
    cursor: pointer;
    
    &:hover {
    margin-left: ${({ theme }) => theme.headingMargin};
    }
`

export const Text = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    flex-grow: 1;
    margin: ${({ theme }) => theme.vertMargin} 0px ${({ theme }) => theme.vertMargin} 0px;
`

export const IconHolder = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const Icon = styled.div`
    margin: ${({ theme }) => theme.vertMargin};
    border-radius: 50%;
    width: 30px;
    cursor: pointer;
`
;