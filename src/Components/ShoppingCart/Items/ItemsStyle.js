import styled from 'styled-components'

export const ItemsContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    padding: 0.5rem;
    margin: 0.5rem;
    border: 1px solid;
    align-items: stretch;
`

export const CarrinhoContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
`

export const CartCardImg = styled.img`
    max-width: 40px;
    /* width: auto; */
    border: 1px solid;
`

export const DescCarrinho = styled.p`
    font-size: 14px;
    padding-left: 0.25rem;
`

export const Valor = styled.p`
    font-size: 14px;
    padding-left: 0.25rem;
`

export const Botão = styled.button`
    display: flex;
    font-size: 12px;
    justify-content: center;
    align-self: center;
    width: 100px;
    padding: 0.25rem;
    cursor: pointer;
`
export const BotãoContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    padding: 0.5rem;
    justify-items: flex-end;
    border: 1px solid;
`

export const ValorTotalContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    padding: 0.5rem;
    justify-items: flex-end;
    border: 1px solid;
`
