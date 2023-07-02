import React from "react";

const LovedProducts = ({ product }) => {
  const design = { margin: 10, borderStyle: "dashed" };
  return (
    <div className="card-loved" style={design}>
      <img className="card-img-top" src={product.image} alt={product.title} />
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-text">{product.description}</p>
        <h3>Rate: {product.amount}</h3>
      </div>
    </div>
  );
};

export default LovedProducts;

