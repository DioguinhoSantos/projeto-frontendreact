import ProductCard from "./ProductCard/ProductCard";
import { HomeContainer, NomePagina, Classificar, Seletor, QtdEncontrada } from "./homeStyle";
import { useState } from "react";

export function Home({ products, cartState, OCCartState, amountState, OCAmountState }) {

    const [ordination, setOrdination] = useState('');

    const OCOrdination = (e) => {
        setOrdination(e.target.value);
    }

    // console.log(ordination)
    
    const qtd = products.length;

    return (
        <HomeContainer>
            <NomePagina>Home</NomePagina>

            <Classificar ordination={ordination} OCOrdination={OCOrdination}>

                <QtdEncontrada>Quantidade encontrada: {qtd}</QtdEncontrada>

                <Seletor id='testando' onChange={OCOrdination} value={ordination}>
                    <option >Selecione...</option>
                    <option >Crescente</option>
                    <option >Decrescente</option>
                </Seletor>

            </Classificar>

            <ProductCard products={products}/>
        </HomeContainer>
    );
}

export default Home;

