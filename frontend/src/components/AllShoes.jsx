import { useState, useEffect } from "react";
import axios from "axios";
import IndividualShoe from "./IndividualShoe";

const AllShoes = () => {
  const [shoes, setShoes] = useState([]);

  const getAllShoes = async () => {
    const res = await axios.get("api/shoes");

    setShoes(res.data);
  };

  useEffect(() => {
    getAllShoes();
  }, []);

  return (
    <>
      <h1 className="m-10 bg-black text-white text-center text-4xl p-2">
        All Shoes
      </h1>
      {shoes.length && (
        <div>
          {shoes.map((shoe, index) => (
            <IndividualShoe key={shoe._id} shoe={shoe} />
          ))}
        </div>
      )}
    </>
  );
};

export default AllShoes;
