import styled from 'styled-components'

export const ItemsContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    padding: 0.25rem;
    margin: 0.25rem;
    border: 1px solid;
`

export const CarrinhoMapContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
    justify-content: space-around;
    /* border: 1px solid; */
    margin-bottom: 0.25rem;
`

export const CarrinhoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid;
    padding: 0.25rem;
    margin-bottom: 0.5rem;
`

export const CartCardImg = styled.img`
    width: 40px;
    height: 40px;
    /* width: auto; */
    border: 1px solid;
`

export const DescCarrinho = styled.p`
    font-size: 10px;
    margin: 0;
    /* padding-left: 0.1rem; */
    align-items: center;
`

export const Valor = styled.p`
    display: flex;
    justify-content: center;
    font-size: 14px;
    margin: 0;

    /* padding-left: 0.25rem; */
`

export const BotãoLimpar = styled.button`
    display: flex;
    font-size: 12px;
    justify-content: center;
    align-self: center;
    width: 100px;
    padding: 0.25rem;
    cursor: pointer;
`

export const BotãoRemover = styled.button`
    display: flex;
    font-size: 10px;
    justify-content: center;
    /* align-self: center; */
    width: 80px;
    /* padding: 0.25rem; */
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
export const DescQuant = styled.p`
    font-size: 10px;
    padding-left: 0.25rem;
`
