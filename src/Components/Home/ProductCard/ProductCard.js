import { CardImg, CardsContainer, ProductCardContainer, Legendas, Botão, Quant } from "./productCardStyle";
import { useState } from "react";

export const ProductCard = ({ products, cartState, setCartState }) => {

    const [stateQuant, setStateQuant] = useState(0);

    const OCStateQuant = (e) => {
        setStateQuant(e.target.value);
    }

    let aaa = products
    
    .map((card, index) => {
        
        const addCart = () => {

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

            const addItem = [...cartState, card];
            // console.log(addItem);
            setCartState(addItem);

            // const filtrado = cartState.filter(function(obj) {
            // return obj.id === 1})
            
            // console.log(filtrado[0].id);

            // cartState.filter(function(obj) { return obj.id })

            // console.log(cartState.filter((filtrads) => {
            //     return filtrads.id === 1
            // }))

            // console.log(card.id)

    
        }
        return (
            <CardsContainer key={index}>

                <CardImg 
                src={card.imageUrl} 
                alt='aaaaa'
                />

                <Legendas>testinho</Legendas>

                <Quant 
                type='number' 
                min={0} 
                placeholder='Quantidade' 
                value={stateQuant} 
                onChange={OCStateQuant}/>

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