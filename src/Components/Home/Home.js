import ProductCard from "./ProductCard/ProductCard";
import { HomeContainer } from "./HomeStyle";

export const Home = () => {
    return (
        <HomeContainer>
            <h1>Home</h1>
            <ProductCard />
        </HomeContainer>
    );
}

export default Home;

