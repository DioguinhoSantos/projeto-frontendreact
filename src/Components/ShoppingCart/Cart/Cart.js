import Items from "../Items/Items";
import { CartContainer } from "./cartStyle";

export const Cart = ({
  cartState,
  amountState,
  setAmountState,
  setCartState,
}) => {
  return (
    <CartContainer>
      <Items
        cartState={cartState}
        setCartState={setCartState}
        amountState={amountState}
        setAmountState={setAmountState}
      />
    </CartContainer>
  );
};

export default Cart;
