import React from 'react';


const New = ({handleAdd, handleInput, userData}) => {
  return (
    <div className="page-wrapper bg-gra-01 p-t-30 p-b-30">
      <div className="cont-black">
        <h2 className="title">Add new swimsuit</h2>

        <form id="novaKartica">
          <div className="form-group">
            <label htmlFor="title" className="lbl">
              Title
            </label>
            <input
              type="text"
              name="ntitle"
              id="title"
              className="input--style-3 inpt-2"
              placeholder=""
              required
              onInput={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="desc" className="lbl">
              Description
            </label>
            <input
              type="text"
              name="desc"
              className="input--style-3 inpt-2"
              placeholder=""
              required
              onInput={handleInput}
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
              onInput={handleInput}
            />
          </div>

          <div className="p-t-20 form-group">
            <a className="btn" value="Add" readOnly onClick={() => {handleAdd(userData) }}>Add</a>
          </div>
        </form>
      </div>
    </div>
  );
}              

export default New;
