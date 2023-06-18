import { useState, useEffect } from "react";
import axios from "axios";
import IndividualShoe from "./IndividualShoe";

const Kids = () => {
  const [shoes, setShoes] = useState([]);

  const getShoes = async () => {
    const res = await axios.get("api/shoes/kids");

    setShoes(res.data);
  };

  useEffect(() => {
    getShoes();
  }, []);

  return (
    <>
      <h1 className="m-10 bg-black text-white text-center text-4xl p-2">
        Kids Shoes
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

export default Kids;
