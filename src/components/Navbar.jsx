import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <section>
        <ul className="flex justify-around mt-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="womens">Womens</Link>
          </li>
          <li>
            <Link to="mens">Mens</Link>
          </li>
          <li>
            <Link to="kids">Kids</Link>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Navbar;
