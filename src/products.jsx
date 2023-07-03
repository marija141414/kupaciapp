import React from "react";
import OneProduct from "./oneProduct";
import { useState } from "react";

const Products = ({ products, onAdd, onRemove, lovedNum }) => {  
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3; 
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  function Pagination({ currentPage, productsPerPage, totalProducts, paginate }) {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={number === currentPage ? 'active' : ''}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    );
  } 

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
    
  return (
      <div className="main-text">
      <h3>Vote for your favourite swimsuit.</h3>
      <h3>The one with the most votes will be added to our new collection.</h3>
      
      <div className="all-products">
        
      {currentProducts.map((product) => (
        <OneProduct 
          key={product.id}    
          product={product}
          onAdd={onAdd}
          onRemove={onRemove}
          lovedNum={lovedNum}
        />
      ))}
    </div>

    <Pagination
      currentPage={currentPage}
      productsPerPage={productsPerPage}
      totalProducts={products.length}
      paginate={paginate}
    />

      </div>
      
    );
  };
  

export default Products;
