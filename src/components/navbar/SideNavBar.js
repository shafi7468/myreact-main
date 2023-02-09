import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function SideNavBar() {
  return (
    <>
      <div class="sidebar">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="fa fa-fw fa-home"  to="/Home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/AboutUs">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/careers">
              careers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/ProductList">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Employee">
              Employee Details
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
