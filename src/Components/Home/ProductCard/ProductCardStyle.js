import styled from 'styled-components'

export const ProductCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0.5rem;
    margin: 1rem;
    border: 1px solid;
    justify-content: space-between;
    /* text-align: center; */
`

export const CardImg = styled.img`
    max-width: 100px;
    /* width: auto; */
    border: 1px solid;
`

export const CardsContainer = styled.div`
    max-height: 200px;
    border: 1px solid;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
`
export const Legendas = styled.p`
    font-size: 14px;
    padding: 0rem;
`

export const Botão = styled.button`
    font-size: 12px;
    padding: 0.25rem;
    cursor: pointer;
`