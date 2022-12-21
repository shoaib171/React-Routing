/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
 
  return (
    <>
      <ul className="list--style">
        <li>
          <NavLink className="Navbar--link" to="/">
            Home-page
          </NavLink>
        </li>
        <li>
          <NavLink className="Navbar--link" to="/Services">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink className="Navbar--link" to="/about">
            About-us
          </NavLink>
        </li>
        <li>
          <NavLink className="Navbar--link" to="/Contact">
            Contact-us
          </NavLink>
        </li>
        <li>
          <NavLink className="Navbar--link" to="/filter">
            Filter Query
          </NavLink>
        </li>
        <li>
          <NavLink className="Navbar--link" to="/dashboard">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink className="Navbar--link" to="/login">
            login
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
