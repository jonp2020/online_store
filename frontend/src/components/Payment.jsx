import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <>
      <h1>Payment page</h1>
      <Link to="/cart/confirmation">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 m-2 rounded">
          Confirm purchase
        </button>
      </Link>
    </>
  );
};

export default Payment;
