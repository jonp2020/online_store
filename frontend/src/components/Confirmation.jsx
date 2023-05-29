import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <>
      <h1>Confirmation Page</h1>
      <Link to="/">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 m-2 rounded">
          Continue shopping
        </button>
      </Link>
    </>
  );
};

export default Confirmation;
