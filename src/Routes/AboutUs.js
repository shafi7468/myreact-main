import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "../components/navbar/Navbar.css"

export default function AboutUs() {
  return (
    <div className="container">
      <div className="row">
        <h1>About us</h1>
        <div className="inline"> 
        
                <NavLink className="nav-item me-2" to="Client">
                Clients
                </NavLink>
             
                <NavLink className="nav-item" to="Product">
                Product
                </NavLink>
             
        
        <Outlet/>
        </div>
      </div>
    </div>
  );
}
