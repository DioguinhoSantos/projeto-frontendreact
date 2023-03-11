import { CardImg, CardsContainer, ProductCardContainer, DescProd, Botão } from "./productCardStyle";

export const ProductCard = ({ products, cartState, setCartState }) => {

    let aaa = products
    .map((card, index) => {

        const addCart = () => {
            
            let checaId = card.id;
            let temNoCarrinho = false
            let checaCarrinho = [...cartState]
            let addItem = [];

            if ( checaCarrinho.length > 0 ) {

                for (let itemNoCarrinho of checaCarrinho) {

                    if (checaId === itemNoCarrinho.id){
                        temNoCarrinho = true;
                        break;
                    }
                        
                    if (checaId !== itemNoCarrinho.id){
                        temNoCarrinho = false;
                    }

                }

                if (temNoCarrinho === false) {
                    card.quantity = 1;
                    addItem = [...cartState, card];
                    setCartState(addItem);
                    console.log(addItem);
                }

                else {
                    card.quantity += 1;
                    addItem = [...cartState];
                    setCartState(addItem);
                    console.log(addItem);                       
                }

            }                            

            else {                                
                card.quantity = 1;                                
                addItem = [...cartState, card];                                
                console.log(addItem);                                
                setCartState(addItem);
            }
                            

        }

        return (
            <CardsContainer key={index}>

                <CardImg 
                src={card.imageUrl} 
                alt='aaaaa'
                />

                <DescProd>{card.name}</DescProd>

                {/* <Quant key={index}
                type='number' 
                min={0} 
                placeholder='Quantidade' 
                value={stateQuant} 
                onChange={OCStateQuant}/> */}

                <Botão 
                onClick={addCart}>
                    Adicionar
                </Botão>
                
            </CardsContainer>
        )
    }
    
    )

    return (
        <ProductCardContainer>

            {aaa}

            {/* <CardsContainer className='card'>
                <CardImg src='https://picsum.photos/300/335?a=1' alt='legenda' />
                <Legendas>testinho</Legendas>
                <button>Adicionar</button>
            </CardsContainer> */}

        </ProductCardContainer>
    );
}

export default ProductCard;


// códigos a analisar

            // if(card.quantity = 0) {
            //     card.quantity = 1; 

            // }

            // if(card.quantity > 0) {
            //     card.quantity += 1;
            // }
            // const filtrado = cartState.filter(function(obj) { return obj.id === 1;})

            
            
            // console.log(typeof filtrado)

            // console.log(aaa)
            // const testinho = cartState.filter(teste )
            
            // console.log(testinho);

            // const filtrado = cartState.filter(function(obj) {
            // return obj.id === 1})
            
            // console.log(filtrado[0].id);

            // cartState.filter(function(obj) { return obj.id })

            // console.log(cartState.filter((filtrads) => {
            //     return filtrads.id === 1
            // }))

            // console.log(card.id)

                                
                            
                            
                            // let pegaId = [...cartState[i].id];
                            // if (cartState === true) {
                                //     console.log('alaudeeee')
                                // }
                                // console.log(checaId);
                                
                                // console.log(checaId);
                                
                                // if ( cartState[i].id === checaId ) {
                                    
                                    // }
                                    
                                    // if (cartState.length === 0) {
                                        // for (let qualquer of addItem) {
                                        //     console.log(qualquer.name)
                                        // }
                            
                            // if (cartState.length !== 0) {
                            //     console.log('for funcionando');
                                // console.log(typeof cartState);
                                // card.quantity = card.quantity + 1;
                                // let addItem = [...cartState, card];
                                // setCartState(addItem);
                                // console.log(addItem);
                                // addItem = [];
                            
                        
