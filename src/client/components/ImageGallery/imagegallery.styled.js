// ProjectList.styled.js
import styled from 'styled-components';

// Unique Elements
export const ModuleSection = styled.section`
    background: ${({ theme }) => theme.midDark};
`

export const LargeHeading = styled.h2`
    font-size: 1.5rem;
    line-height: 1.4;
    margin: 1rem 0;
    flex-basis: 100%;
`

export const List = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    flex-wrap: wrap;
`

export const ListItem = styled.div`
    display: flex;
    flex: 50%;
    height: 50vh;
    justify-content: space-between;
    align-items: center;
    // margin-bottom: ${({ theme }) => theme.headingMargin};
    // padding: 10px 10px;
    // border-radius:5px;
    background: ${({ theme }) => theme.mask}, url(${props => props.img}) no-repeat center;
    background-size: cover;
    transition: .5s;
    overflow: hidden;
    cursor: pointer;
`

export const Text = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.primaryLight}
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