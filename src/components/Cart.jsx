import { Link, Outlet } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <h4>Shopping cart</h4>
      <Link to="/cart/payment">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 m-2 rounded">
          Proceed to payment
        </button>
      </Link>
    </>
  );
};

export default Cart;
