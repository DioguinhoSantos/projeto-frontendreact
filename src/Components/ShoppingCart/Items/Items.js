import UINUmber from "../../UINumber";
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
    DescNome,
    DescPreco,
    BotãoRemover,
    DivPreco
    }
    from "./itemsStyle";

export const Items = ({ cartState, setCartState, setAmountState, amountState }) => {

    let totalCarrinho = 0;

    let limpaCarrinho = () => {
        setCartState([]);
        setAmountState(0);
    }
    
    let carrinho = cartState.map((item, index) => {

        const removeItem = () => {
            
            if ( item.quantity > 0 ) {
                
                item.quantity -= 1;
                
                if ( item.quantity === 0 ) {
                    
                    cartState.splice(index, 1);
    
                }

                let removeItem = [...cartState];
                    setCartState(removeItem);

                    if ( cartState.length === 0 ) {

                        totalCarrinho = 0;
                        setAmountState(totalCarrinho);

                    }
            }

        }

        totalCarrinho = totalCarrinho + item.value*item.quantity;

        let tratado = totalCarrinho.toFixed(2);

        setAmountState(tratado);

        tratado = '';

        let precoTratado = item.value.toFixed(2);

        return (
            <CarrinhoContainer key={index}>
                <CarrinhoMapContainer>
                    <CartCardImg src={item.imageUrl} alt='aaaaa' />
                    <DescCarrinho>
                        <DescNome>Desc: {item.name}</DescNome>
                        <DivPreco><DescPreco>Valor: R</DescPreco><UINUmber format={'$0,0.00'}>{precoTratado}</UINUmber></DivPreco>
                    </DescCarrinho>
                    <DescQuant>
                        <br/>
                        Qtd: 
                        <br/>
                        {item.quantity}</DescQuant>
                </CarrinhoMapContainer>
                    <BotãoRemover onClick={removeItem}>
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
                <BotãoLimpar onClick={limpaCarrinho}>Limpar carrinho</BotãoLimpar>
            </BotãoContainer>
            <ValorTotalContainer>
            <Valor>Total: R</Valor><UINUmber format={'$0,0.00'}>{amountState}</UINUmber>
            </ValorTotalContainer>
        </ItemsContainer>
    );
}

export default Items
