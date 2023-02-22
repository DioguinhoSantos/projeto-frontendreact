import { CardImg, CardsContainer, ProductCardContainer, Legendas } from "./productCardStyle";
import img from './github.png'

export const ProductCard = () => {
    return (
        <ProductCardContainer>

            <CardsContainer className='card'>
                <CardImg src={img} alt='legenda'/>
                <Legendas>testinho</Legendas>
                <button>Adicionar</button>
            </CardsContainer>

            <CardsContainer className='card'>
                <CardImg src={img} alt='legenda'/>
                <Legendas>testinho</Legendas>
                <button>Adicionar</button>
            </CardsContainer>

            <CardsContainer className='card'>
                <CardImg src={img} alt='legenda'/>
                <Legendas>testinho</Legendas>
                <button>Adicionar</button>
            </CardsContainer>

            <CardsContainer className='card'>
                <CardImg src={img} alt='legenda'/>
                <Legendas>testinho</Legendas>
                <button>Adicionar</button>
            </CardsContainer>

            <CardsContainer className='card'>
                <CardImg src={img} alt='legenda'/>
                <Legendas>testinho</Legendas>
                <button>Adicionar</button>
            </CardsContainer>

            <CardsContainer className='card'>
                <CardImg src={img} alt='legenda'/>
                <Legendas>testinho</Legendas>
                <button>Adicionar</button>
            </CardsContainer>
            
            <CardsContainer className='card'>
                <CardImg src={img} alt='legenda'/>
                <Legendas>testinho</Legendas>
                <button>Adicionar</button>
            </CardsContainer>

        </ProductCardContainer>
    );
}

export default ProductCard;