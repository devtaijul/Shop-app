import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home(props) {
  return (
    <div className="container">
      <div className="product-list">
        <h2 className="text-center product-head pt-3"> all products</h2>
        <hr />

        <Product />
      </div>
    </div>
  );
}

export default Home;
