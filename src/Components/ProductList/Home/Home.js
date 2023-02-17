import ProductCard from "../ProductCard/ProductCard";
import { HomeContainer } from "./HomeStyle";

export const Home = ({}) => {
    return (
        <HomeContainer>
            <p>Home</p>
            <p>{ProductCard}</p>
        </HomeContainer>
    );
}

export default Home;

