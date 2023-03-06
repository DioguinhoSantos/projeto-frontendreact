import styled from 'styled-components'

export const ProductCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0.25rem;
    margin: 0.5rem;
    border: 1px solid;
    justify-content: space-evenly;
    /* text-align: center; */
`

export const CardImg = styled.img`
    max-width: 100px;
    /* width: auto; */
    border: 1px solid;
`

export const CardsContainer = styled.div`
    max-height: 200px;
    width: 150px;
    border: 1px solid;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
`

export const Legendas = styled.p`
    font-size: 12px;
    margin: 0;
    padding: 0rem;
`

export const Botão = styled.button`
    font-size: 12px;
    padding: 0.25rem;
    cursor: pointer;
`

export const Quant = styled.input`
    width: 40%;
    font-size: 12px;
    padding: 0.25rem;
`