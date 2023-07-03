import React from "react";
import OneProduct from "./oneProduct";

const Products = ({ products, onAdd, onRemove, lovedNum }) => {  
    return (
      <div className="main-text">
      <h3>Vote for your favourite swimsuit.</h3>
      <h3>The one with the most votes will be added to our new collection.</h3>
      
      <div className="all-products">
        
        {products.map((product) => (
        <OneProduct 
            key={product.id}    
            product={product}
            onAdd={onAdd}
            onRemove={onRemove}
            lovedNum={lovedNum} />
      ))}

      </div>
      </div> 
    );
  };
  

export default Products;
