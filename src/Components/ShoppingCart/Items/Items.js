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
    // let carrinho = [];

    let carrinho = cartState.map((item, index) => {
    //     for ( let i = 0 ; i <= carrinho.length ; i++ ) {
    //         if( item.id === carrinho[i].id) {
    //             item.id += 1;
    //         }
        
    // }
        // console.log(typeof carrinho);

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
