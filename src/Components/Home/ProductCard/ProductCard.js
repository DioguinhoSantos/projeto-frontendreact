import { CardImg, CardsContainer, ProductCardContainer } from "./ProductCardStyle";
import img from './github.png'

export const ProductCard = () => {
    return (
        <ProductCardContainer>

            <CardsContainer className='card'>
                <CardImg src={img} alt='legenda'/>
                <h4>testinho</h4>
                <button>Adicionar</button>
            </CardsContainer>

            <CardsContainer className='card'>
                <CardImg src={img} alt='legenda'/>
                <h4>testinho</h4>
                <button>Adicionar</button>
            </CardsContainer>

            <CardsContainer className='card'>
                <CardImg src={img} alt='legenda'/>
                <h4>testinho</h4>
                <button>Adicionar</button>
            </CardsContainer>

        </ProductCardContainer>
    );
}

export default ProductCard;