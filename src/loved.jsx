import React from "react";
import LovedProducts from "./lovedProducts";

const Loved = ({ lovedProducts }) => {
  return (
    <div className="title-loved">
      <h1>Your favourites</h1>
    <div className="loved-container">      
      {lovedProducts.map((product) => (
        <LovedProducts key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
};

export default Loved;

