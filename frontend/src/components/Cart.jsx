import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <h4>Your items</h4>

      {cartItems.length <= 0 && <p>You have no items</p>}
      {cartItems.length > 0 &&
        cartItems.map((item) => <CartItem item={item} />)}

      <Link to="/cart/payment">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 m-2 rounded">
          Proceed to payment
        </button>
      </Link>
    </>
  );
};

export default Cart;
