import styled from 'styled-components'

export const ProductCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0.25rem;
    margin: 0.5rem;
    border: 1px solid;
    justify-content: space-evenly;
`

export const CardImg = styled.img`
    width: 100px;
    height: 100px;
    border: 1px solid;
`

export const CardsContainer = styled.div`
    max-height: 200px;
    width: 150px;
    border: 1px solid;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
`

export const DescProd = styled.p`
    font-size: 12px;
    font-weight: bold;
    margin: 0;
    padding: 0rem;
`

export const Botão = styled.button`
    font-size: 12px;
    padding: 0.25rem;
    cursor: pointer;
`

// export const Quant = styled.input`
//     width: 40%;
//     font-size: 12px;
//     padding: 0.25rem    
// `

export const Quant = styled.input`
    width: 40%;
    font-size: 12px;
    padding: 0.25rem;
    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }  
`

export const Preço = styled.div`
    font-size: 11px;
    margin: 0;
    padding: 0;
`

export const DivPreco = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    margin: 0;
    padding: 0;
`
