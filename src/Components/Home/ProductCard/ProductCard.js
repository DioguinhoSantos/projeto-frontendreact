import { CardImg, CardsContainer, ProductCardContainer, Legendas, Botão } from "./productCardStyle";
// import { useState } from "react";

export const ProductCard = ({ products, cartState, setCartState }) => {

    
    let aaa = products.map((card, index) => {
        
        const addCart = () => {
            // console.log(card.name)
            const addItem = [...cartState, card];
            console.log(addItem);
            setCartState(addItem);
    
        }
        return (
            <CardsContainer key={index}>
                <CardImg src={card.imageUrl} alt='aaaaa' />
                <Legendas>testinho</Legendas>
                <Botão onClick={addCart}>Adicionar</Botão>
            </CardsContainer>
        )
    }
    
    )

    // console.log(products)
    // console.log()
    // console.log(typeof products)

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