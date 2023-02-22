import ProductCard from "./ProductCard/ProductCard";
import { HomeContainer, NomePagina, Classificar, Seletor, QtdEncontrada } from "./homeStyle";

export function Home ({products}) {

    console.log(products)
    return (
        <HomeContainer>
            <NomePagina>Home</NomePagina>
            <Classificar>
                <QtdEncontrada>Quantidade encontrada: zero</QtdEncontrada>
                
                <Seletor>
                    <option>Selecione...</option>
                    <option>Crescente</option>
                    <option>Decrescente</option>
                </Seletor>
        
            </Classificar>
            <ProductCard products={products}/>
        </HomeContainer>
    );
}

export default Home;

