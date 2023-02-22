import ProductCard from "./ProductCard/ProductCard";
import { HomeContainer, NomePagina, Classificar, Seletor, QtdEncontrada } from "./homeStyle";

export const Home = () => {
    return (
        <HomeContainer>
            <NomePagina>Home</NomePagina>
            <Classificar>
                <QtdEncontrada>Quantidade encontrada: vários</QtdEncontrada>
                
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

