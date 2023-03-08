import { CardImg, CardsContainer, ProductCardContainer, Legendas, Botão, Quant } from "./productCardStyle";
import { useState } from "react";

export const ProductCard = ({ products, cartState, setCartState }) => {

    // const [stateQuant, setStateQuant] = useState(1);
    const [novoItem, setNovoItem] = useState('');

    // const OCStateQuant = (e) => {
    //     setStateQuant(e.target.value);
    // }

    // const OCNovoItem = (e) => {
    //     setStateQuant(e.target.value);
    // }



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
                        
                        let addItem = [...cartState, card];
                        card.quantity = 1;
                        // console.log(addItem);
                        setCartState(addItem);
                        console.log(addItem);
                        addItem = [];
                        console.log(addItem);
                        
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

    