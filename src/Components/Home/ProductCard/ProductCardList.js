import { ProductCardContainer } from "./productCardStyle";
import ProductCard from "./ProductCard";

export const ProductCardList = ({ products, cartState, setCartState, minFilter, maxFilter, searchFilter, ordination }) => {

    let aaa = products
    .filter((card) => {

        if ( minFilter === '' ) return true;
        return card.value >= minFilter;

    })
    .filter((card) => {

        if ( maxFilter === '' ) return true;
        return card.value <= maxFilter;

    })
    .filter((card) => {

        if ( searchFilter === '' ) return true;
        return (
            card.name
            .toLowerCase()
            .includes(searchFilter.toLowerCase())
            );
            
    })
    .map((card, index) => {

        if ( ordination === 'Crescente') {
            products.sort((a, b) => {
                if (a.id < b.id) {
                    return -1;
                } else {
                    return true;
            }
            })
        }

        if ( ordination === 'Decrescente') {
            products.sort((a, b) => {
                if (a.id > b.id) {
                    return -1;
                } else {
                    return true;
            }
            })
        }

        return (
            <ProductCard key={index}
            card={card}
            cartState={cartState}
            setCartState={setCartState}
            />
            )
        })
        
        return (
        <ProductCardContainer>
            {aaa}
        </ProductCardContainer>
    );
}

export default ProductCardList;
               
