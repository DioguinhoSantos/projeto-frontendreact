import ProductCardList from "./ProductCard/ProductCardList";
import { HomeContainer, NomePagina, Classificar, Seletor, QtdEncontrada } from "./homeStyle";
import { useState } from "react";

export function Home({ products, cartState, setCartState, minFilter, maxFilter, searchFilter }) {

    const [ordination, setOrdination] = useState('');

    const OCOrdination = (e) => {
        setOrdination(e.target.value);
    }
    
    const qtd = products.length;

    

    return (
        <HomeContainer>
            <NomePagina>
                Home
            </NomePagina>

            <Classificar 
            ordination={ordination} 
            OCOrdination={OCOrdination}>

                <QtdEncontrada>
                    Quantidade encontrada: {qtd}
                </QtdEncontrada>

                <Seletor 
                id='testando' 
                onChange={OCOrdination} 
                value={ordination}>
                    <option >Selecione...</option>
                    <option >Crescente</option>
                    <option >Decrescente</option>
                </Seletor>

            </Classificar>

            <ProductCardList 
            products={products} 
            cartState={cartState}
            setCartState={setCartState}
            minFilter={minFilter}
            maxFilter={maxFilter}
            searchFilter={searchFilter}
            ordination={ordination}
            />
        </HomeContainer>
    );
}

export default Home;

