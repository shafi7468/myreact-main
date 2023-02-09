import React from "react";
import { NavLink } from "react-router-dom";
import Product from "./Product";
import products from "./products.json";

export default function ProductList() {
  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return <Product prod={product} key={product.id} />;
          })}
        </div>
      </div>
      <div align="center">
        <NavLink
          to="/Home"
          class="btn btn-primary"
          className={{ align: "center" }}
        >
          Home
        </NavLink>
      
      </div>
    </>
  );
}
