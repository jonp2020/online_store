import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <section>
        <ul className="flex justify-around mt-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/womens"
              className={({ isActive, isPending }) =>
                isActive ? "active" : ""
              }
            >
              Womens
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mens"
              className={({ isActive, isPending }) =>
                isActive ? "active" : ""
              }
            >
              Mens
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/kids"
              className={({ isActive, isPending }) =>
                isActive ? "active" : ""
              }
            >
              Kids
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive, isPending }) =>
                isActive ? "active" : ""
              }
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </NavLink>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Navbar;
