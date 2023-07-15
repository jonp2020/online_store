import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="flex flex-col items-center m-4">
      {cartItems.length <= 0 && <p>You have no items to your shopping cart.</p>}
      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <>
            <h4 className="m-4">Your items:</h4>
            <CartItem item={item} />
            <Link to="/cart/payment">
              <button className="mt-4 bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 m-2 rounded">
                Proceed to payment
              </button>
            </Link>
          </>
        ))}
    </div>
  );
};

export default Cart;
