import { CardImg, CardsContainer, ProductCardContainer, Legendas } from "./productCardStyle";
// import { useState } from "react";

export const ProductCard = ({ products }) => {

    let aaa = products.map((card, index) => {
        return (
            <CardsContainer key={index}>
                <CardImg src={card.imageUrl} alt='aaaaa' />
                <Legendas>testinho</Legendas>
                <button>Adicionar</button>
            </CardsContainer>
        )
    })

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