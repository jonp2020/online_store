import { Link } from "react-router-dom";
import heroImage from "../assets/images/walking-large.jpg";

// src/assets/images/walking-large.jpg

const Home = () => {
  return (
    <>
      <img src={heroImage} alt="Girl in a jacket" width="" height="" />
      <div>
        <Link to="womens">
          <h1 className="mb-0.5 bg-black text-white text-center text-4xl p-2">
            Shop Womens
          </h1>
        </Link>
      </div>
      <div>
        <Link to="mens">
          {" "}
          <h1 className="mb-0.5 bg-black text-white text-center text-4xl p-2">
            Shop Mens
          </h1>
        </Link>
      </div>
      <div>
        <Link to="kids">
          {" "}
          <h1 className="mb-0.5 bg-black text-white text-center text-4xl p-2">
            Shop Kids
          </h1>
        </Link>
      </div>
    </>
  );
};

export default Home;
