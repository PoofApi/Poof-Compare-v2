import React from 'react';
import './highlightCSS.css';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';

const Compare = ({items, toggleClick}) => {

  let amazon = [];
  let ebay = [];
  let bestBuy = [];

  
  return(
    <div className="highlightContainer">
      <div className="hToolbar">
          <i className="material-icons toggleButton" onClick={() => toggleClick()} >expand_more</i>
          <div className="detailsTitle">Poof! Compare Table</div>
          <div className="compareLinkHolder">
            <Link className="compareRoute" to={'/compare-table'}><i className="material-icons">view_list</i></Link>
          </div>
      </div>
      <div className="compareTableContainer">
              <div className="container-fluid container-scroll watchContainer compareContainer" key={uuid()}>
                <div className="row">
          {items.map(item =>
                  <div className="col-md-2">
                    <div className="card poofCompareCard">
                      <div className="row">
                        <div className="col-md-4">
                          <img src={item.image} alt={item.title} key={item.id} style={{width: "50px", height: "70px"}}/>
                        </div>
                      </div>
                    </div>
                  </div>
          )}
                </div>
              </div>
      </div>
    </div>
  )

};

export default Compare
