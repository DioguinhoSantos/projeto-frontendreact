import {
    ItemsContainer,
    CarrinhoContainer,
    CarrinhoMapContainer,
    CartCardImg,
    DescCarrinho,
    Valor,
    BotãoLimpar,
    BotãoContainer,
    ValorTotalContainer,
    DescQuant,
    BotãoRemover
    }
    from "./itemsStyle";

export const Items = ({ cartState, setAmountState, amountState }) => {

    let totalCarrinho = 0;

    let carrinho = cartState.map((item, index) => {

        totalCarrinho = totalCarrinho + item.value*item.quantity;

        setAmountState(totalCarrinho);

        return (
            <CarrinhoContainer key={index}>
                <CarrinhoMapContainer>
                    <CartCardImg src={item.imageUrl} alt='aaaaa' />
                    <DescCarrinho>
                        Descrição: {item.name}
                        <br/>
                        <br/>
                        Valor: {item.value}
                    </DescCarrinho>
                    <DescQuant>Qtd: {item.quantity}</DescQuant>
                </CarrinhoMapContainer>
                    <BotãoRemover>
                        Remover item
                    </BotãoRemover>
            </CarrinhoContainer>
        )
    }
    )

    return (
        <ItemsContainer>
            {carrinho}
            <BotãoContainer>
                <BotãoLimpar>Limpar carrinho</BotãoLimpar>
            </BotãoContainer>
            <ValorTotalContainer>
                <Valor>Valor total: {amountState}</Valor>
            </ValorTotalContainer>
        </ItemsContainer>
    );
}

export default Items
