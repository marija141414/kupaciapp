import React from 'react'
import { AiFillHeart, AiOutlineFire } from "react-icons/ai";
import { Link } from "react-router-dom";




function NavBar({ lovedNum }) {
    return (
      
      <div className="navBar">
        <div className='logo'>
        <AiOutlineFire/>
        </div>
        <div style={{ marginLeft: 5 }}>Fire</div>
        <Link to="/" style={{ marginLeft: 1120 }}>New collection</Link>
        <Link to="/new" style={{ marginLeft: 20 }}>Add new</Link>
        <Link to="/loved" className="loved-items">
          <AiFillHeart style={{ marginLeft: 20 }} />
          <div className="loved-num">{lovedNum}</div>
        </Link>

      </div>
      
    );
  }
  
  export default NavBar;
  
