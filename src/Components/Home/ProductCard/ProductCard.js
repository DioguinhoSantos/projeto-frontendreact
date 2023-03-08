import { CardImg, CardsContainer, ProductCardContainer, Legendas, Botão, Quant } from "./productCardStyle";
import { useEffect, useState } from "react";

export const ProductCard = ({ products, cartState, setCartState }) => {

    useEffect(
        () =>  console.log(cartState[0].id)
                
    )

    let aaa = products
    .map((card, index) => {
        


        const addCart = () => {
            
            // const novoItem2 = [card];
            // const idFiltrado = novoItem2[0].id;
            
            // console.log(novoItem2.length);
            
            // for ( let g = 0 ; g <= cartState.length ; g++ ) {
                //     if ( idFiltrado === cartState[g].id ) {
                    //         card.quantity += 1;            
                    //     }
                    //     if ( idFiltrado !== cartState[g].id ) {
                        
                        //     }
                        // }
                        for ( let i = 0 ; i <= cartState.length ; i++ ) {
                            let checaId = card.id;
                            // console.log(checaId);

                            // if ( cartState[i].id === checaId ) {

                            // }
                            
                            if (cartState.length === 0) {
                                card.quantity = 1;
                                let addItem = [...cartState, card];
                                setCartState(addItem);
                                console.log(addItem);
                                addItem = [];
                            }
                            if (cartState.length !== 0) {
                                console.log('for funcionando');
                                card.quantity = card.quantity + 1;
                                let addItem = [...cartState, card];
                                setCartState(addItem);
                                console.log(addItem);
                                addItem = [];
                            }
                        }

        }
        return (
            <CardsContainer key={index}>

                <CardImg 
                src={card.imageUrl} 
                alt='aaaaa'
                />

                <Legendas>testinho</Legendas>

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

    