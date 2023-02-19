import ProductCard from "./ProductCard/ProductCard";
import { HomeContainer } from "./HomeStyle";

export const Home = () => {
    return (
        <HomeContainer>
            <p>Home</p>
            <ProductCard />
        </HomeContainer>
    );
}

export default Home;

