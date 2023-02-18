import Items from "../Items/Items";
import { CartContainer } from "./CartStyle";

export const Cart = () => {
    return (
        <CartContainer>
            <p>Cart</p>
            <Items/>
        </CartContainer>
    );
}

export default Cart;