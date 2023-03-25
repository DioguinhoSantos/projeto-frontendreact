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
    justify-items: flex-start;
    border-radius: 10px;
`

export const NomePagina = styled.p`
    font-size: 24px;
    font-weight: bold;
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
`

export const QtdEncontrada = styled.p`
    display: flex;
    font-size: 16px;
    padding: 0;
    margin: 0;
`
