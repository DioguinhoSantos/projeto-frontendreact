import Items from "../Items/Items";
import { CartContainer} from "./cartStyle";

export const Cart = ({ cartState, amountState, setAmountState }) => {

    return (
        <CartContainer>
            <Items
            cartState={cartState}
            amountState={amountState}
            setAmountState={setAmountState}
            />
            
        </CartContainer>
    );
}

export default Cart;

