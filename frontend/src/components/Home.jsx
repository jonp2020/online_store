import { Link } from "react-router-dom";
import heroImage from "../assets/images/walking-large.jpg";

// src/assets/images/walking-large.jpg

const Home = () => {
  return (
    <>
      <img src={heroImage} alt="Girl in a jacket" width="" height="" />
      <div>
        <h1>
          <Link to="womens">Shop Womens</Link>
        </h1>
      </div>
      <div>
        <Link to="mens">
          {" "}
          <h1>Shop Mens</h1>
        </Link>
      </div>
      <div>
        <Link to="kids">
          {" "}
          <h1>Shop Kids</h1>
        </Link>
      </div>
    </>
  );
};

export default Home;
