import { CardImg, CardsContainer, ProductCardContainer, Legendas } from "./productCardStyle";
// import img from './github.png'
// import { useState } from "react";

export const ProductCard = ({ products }) => {


    // const [listaCards, setListaCards] = useState('');

    // setListaCards(products);

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