import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <nav>
        <ul className="flex justify-around mt-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                ["nav-link", isActive ? "active" : null]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="all"
              className={({ isActive }) =>
                ["nav-link", isActive ? "active" : null]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to="womens"
              className={({ isActive }) =>
                ["nav-link", isActive ? "active" : null]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              Womens
            </NavLink>
          </li>
          <li>
            <NavLink
              to="mens"
              className={({ isActive }) =>
                ["nav-link", isActive ? "active" : null]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              Mens
            </NavLink>
          </li>
          <li>
            <NavLink
              to="kids"
              className={({ isActive }) =>
                ["nav-link", isActive ? "active" : null]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              Kids
            </NavLink>
          </li>
          <li>
            <NavLink
              to="cart"
              className={({ isActive }) =>
                ["nav-link", "relative", isActive ? "active" : null]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              <FontAwesomeIcon icon={faCartShopping} />
              {cartItems.length !== 0 ? (
                <span className="absolute -right-5 left-5 top-0 text-center text-black text-sm">
                  {cartItems.length}
                </span>
              ) : null}
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
