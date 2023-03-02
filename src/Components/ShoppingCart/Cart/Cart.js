import Items from "../Items/Items";
import { Botão, CartContainer, LittleCart } from "./cartStyle";

export const Cart = ({cartState, OCCartState, amountState, OCAmountState}) => {

    return (
        <CartContainer>
            <Items />

            <Botão>Remover</Botão>

            <LittleCart>
            
            </LittleCart>

            
        </CartContainer>
    );
}

export default Cart;

