import ProductCard from "./ProductCard/ProductCard";
import { HomeContainer, NomePagina, Classificar, Seletor } from "./homeStyle";

export const Home = () => {
    return (
        <HomeContainer>
            <NomePagina>Home</NomePagina>
            <Classificar>
                <Seletor>
                    <option>Selecione...</option>
                    <option>Crescente</option>
                    <option>Decrescente</option>
                </Seletor>
                
                <Seletor>
                    <option>Selecione...</option>
                    <option>Crescente</option>
                    <option>Decrescente</option>
                </Seletor>
            </Classificar>
            <ProductCard />
        </HomeContainer>
    );
}

export default Home;

