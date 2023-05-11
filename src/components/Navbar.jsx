import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
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
                ["nav-link", isActive ? "active" : null]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
