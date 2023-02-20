import Items from "../Items/Items";
import { CartContainer } from "./cartStyle";

export const Cart = () => {
    return (
        <CartContainer>
            <p>Zero itens no carrinho</p>

            <div>
                <button>Remover</button>
            </div>

            <Items />
        </CartContainer>
    );
}

export default Cart;

