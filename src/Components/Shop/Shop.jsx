import React from "react";

import "./shop.scss";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";

const Shop = () => {
  const products = useSelector((state) => state.product);
  return (
    <div
      style={{ margin: "0 auto", textAlign: "center" }}
      className="container shopping_container"
    >
      <h2
        style={{
          padding: "20px 0",
          height: "80px",
          fontSize: "40px",
          fontWeight: "700",
        }}
      >
        Shop
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        {products.products.map((product, index) => (
          <div key={index} style={{ width: "19%", borderRadius: "15px" }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
