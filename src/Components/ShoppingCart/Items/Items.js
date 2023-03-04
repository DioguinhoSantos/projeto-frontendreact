import {
    ItemsContainer,
    CarrinhoContainer,
    CartCardImg,
    DescCarrinho,
    Valor,
    Botão,
    BotãoContainer,
    ValorTotalContainer
    }
    from "./itemsStyle";

export const Items = ({ cartState, setAmountState, amountState }) => {

    let soma = 0;

    let carrinho = cartState.map((item, index) => {

        soma = soma + item.value;

        setAmountState(soma);

        return (
            <CarrinhoContainer key={index}>
                <CartCardImg src={item.imageUrl} alt='aaaaa' />
                <DescCarrinho>{item.name}</DescCarrinho>
                <Valor>{item.value}</Valor>
            </CarrinhoContainer>

        )
    }
    )

    return (
        <ItemsContainer>
            {carrinho}
            <BotãoContainer>
                <Botão>Remover</Botão>
            </BotãoContainer>
            <ValorTotalContainer>
                <Valor>Valor total: {amountState}</Valor>
            </ValorTotalContainer>
        </ItemsContainer>
    );
}

export default Items
