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
    BotãoRemover
    }
    from "./itemsStyle";

export const Items = ({ cartState, setCartState, setAmountState, amountState }) => {

    let totalCarrinho = 0;
    
    let carrinho = cartState.map((item, index) => {
        
        
        const removeItem = () => {
            
            if ( item.quantity > 0 ) {
                
                item.quantity -= 1;
                
                if ( item.quantity === 0 ) {
                    
                    cartState.splice(index, 1);
                    console.log(cartState);
    
                }

                let removeItem = [...cartState];
                setCartState(removeItem);

                    if ( cartState.length === 0 ) {

                        totalCarrinho = 0;
                        setAmountState(totalCarrinho);

                    }
                console.log(cartState);

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
                        Descrição: {item.name}
                        <br/>
                        <br/>
                        Valor: R$ <UINUmber format={'0a'}>{precoTratado}</UINUmber>
                    </DescCarrinho>
                    <DescQuant>Qtd: {item.quantity}</DescQuant>
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
                <BotãoLimpar>Limpar carrinho</BotãoLimpar>
            </BotãoContainer>
            <ValorTotalContainer>
            <Valor>aaaa<UINUmber format={'0,0'}>{amountState}</UINUmber></Valor>
            </ValorTotalContainer>
        </ItemsContainer>
    );
}

export default Items
