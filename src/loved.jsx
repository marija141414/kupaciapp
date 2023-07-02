import React from "react";
import LovedProducts from "./lovedProducts";

const Loved = ({ lovedProducts }) => {
  return (
    <div className="loved-container">
      <h1>Your favourites</h1>
      {lovedProducts.map((product) => (
        <LovedProducts key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Loved;

