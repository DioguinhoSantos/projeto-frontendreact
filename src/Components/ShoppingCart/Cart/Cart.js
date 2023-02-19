import Items from "../Items/Items";
import { CartContainer } from "./cartStyle";

export const Cart = () => {
    return (
        <CartContainer>
            <p>Cart</p>
            <Items/>
        </CartContainer>
    );
}

export default Cart;