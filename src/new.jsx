import React from 'react';
import { useState } from 'react';

  const New = ({ handleAdd }) => {
    const [userData, setUserData] = useState({      
      title: '',
      description: '',
      amount: 0,
      image: '',
    });
  
    const handleInput = (e) => {
      const { name, value } = e.target;
      setUserData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      handleAdd(userData);
    };
  

    return (
      <div className="page-wrapper bg-gra-01 p-t-30 p-b-30">
        <div className="cont-black">
          <h2 className="title">Add new swimsuit</h2>
          <form id="novaKartica" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title" className="lbl">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="input--style-3 inpt-2"
                placeholder=""
                required
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="desc" className="lbl">
                Description
              </label>
              <input
                type="text"
                name="description"
                className="input--style-3 inpt-2"
                placeholder=""
                required
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="image" className="lbl">
                Image
              </label>
              <input
                type="text"
                name="image"
                className="input--style-3 inpt-2"
                placeholder=""
                required
                onChange={handleInput}
              />
            </div>
            <button className="btn1" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    );
  };
  

export default New;
