import styled from 'styled-components'

export const StyledListItem = styled.li`
    display: flex;
    border-radius: 5px;
    padding: 0px 16px;
    transition: all 0.4s ease;
    :hover {
        color: #00b0ff;
        box-shadow: 1px 1px 10px #00b0ff44;
    }
`

export const StyledUl = styled.ul`
    font-family: monaco;
    list-style: none;
    background: #f4f4f4;
    padding: 8px;
    border-radius: 5px;
    li:nth-child(odd) {
        background: #ffffff;
    }
`
export const StyledKeysDiv = styled.div`
    width: 25%;
    height: 50px;
    display: flex;
    text-align: center;
    align-items: center;
`
export const StyledDescDiv = styled.div`
    height: 50px;
    display: flex;
    text-align: center;
    align-items: center;
`