import React from "react";
import {AiFillPlusCircle, AiFillMinusCircle} from "react-icons/ai";

const OneProduct = ({ product, onAdd, onRemove }) => {
    return (
    <div className="card" style={{ margin: 10, borderStyle: "dashed" }}>
      <img className="card-img-top" src={product.image} alt={product.title} />
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-text">{product.description}</p>
        <a className="btn" onClick={() => onAdd(product.id)}>
            <AiFillPlusCircle />
        </a>
        <a className="btn" onClick={() => onRemove(product.id)}>
            <AiFillMinusCircle />
        </a>
      </div>
    </div>
  );
};

export default OneProduct;
