import Items from "../Items/Items";
import { Botão, CartContainer, LittleCart } from "./cartStyle";

export const Cart = ({cartState, OCCartState, amountState, OCAmountState}) => {
    return (
        <CartContainer>
            <LittleCart >{cartState}</LittleCart>
            <Botão>Remover</Botão>
            <Items />
        </CartContainer>
    );
}

export default Cart;

