import React from 'react'
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

function NavBar({ lovedNum }) {
    return (
      <div className="navBar">
        <Link to="/">New collection</Link>
        <Link to="/loved" className="loved-items">
          <AiFillHeart style={{ marginLeft: 20 }} />
          <div className="loved-num">{lovedNum}</div>
        </Link>
      </div>
    );
  }
  
  export default NavBar;
  
