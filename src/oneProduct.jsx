import React from "react";
import {AiFillHeart, AiFillFrown} from "react-icons/ai";

const OneProduct = ({ product, onAdd, onRemove, lovedNum }) => {
  
    return (
    <div className="card" style={{ margin: 10}}>
      <img className="card-img-top" src={product.image} alt={product.title} />
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-text">{product.description}</p>
        <a className="btn" onClick={() => onAdd(product.id)}>
            <AiFillHeart />
        </a>
        <a className="btn" onClick={() => onRemove(product.id)}>
            <AiFillFrown />
        </a>
        <a className="number-of-loves">{lovedNum}</a>
      </div>
    </div>
  );
};

export default OneProduct;
