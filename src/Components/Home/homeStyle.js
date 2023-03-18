import styled from 'styled-components'

export const HomeContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-basis: 60%;
    flex-direction: column;
    padding: 0.5rem;
    margin: 0.5rem;
    text-align: center;
    border: 1px solid;
    /* align-items: stretch; */
    /* text-align: center; */
    justify-items: flex-start;
    /* width: 60em; */
`

export const NomePagina = styled.p`
    font-size: 24px;
`

export const Classificar = styled.div`
    display: flex;
    padding: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Seletor = styled.select`
    width: 100px;
    height: 20px;
    /* flex-direction: flex-start; */
`

export const QtdEncontrada = styled.p`
    display: flex;
    font-size: 16px;
    padding: 0;
    margin: 0;
`
