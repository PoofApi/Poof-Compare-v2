import React, {Component} from 'react';
import './highlightCSS.css';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';

class Compare extends Component {
  constructor(props){
    super(props);
  }

  compareFilter = (items) => {
    let amazonItems = [];
    let ebayItems = [];
    let bestBuyItems = [];

    let filteredItems = {
      amazon: [],
      bestbuy: [],
      ebay: []
    }

    for (let item of items) {
      if(item.source === "amazon"){
        amazonItems.push(item)
      }
      if(item.source === "ebay"){
        ebayItems.push(item)
      }
      if(item.source === "bestbuy"){
        bestBuyItems.push(item)
      }
    }

    filteredItems = {
      amazon : amazonItems,
      bestbuy : bestBuyItems,
      ebay : ebayItems
    }

    return filteredItems;
  }


  render(){

    let filteredItems = this.compareFilter(this.props.items);

    console.log("amazon filter items test ", filteredItems)
    
    return(
        <div className="highlightContainer">
          <div className="hToolbar">
              <i className="material-icons toggleButton" onClick={() => this.props.toggleClick()} >expand_more</i>
              <div className="detailsTitle">Poof! Compare Table</div>
              <div className="compareLinkHolder">
                <Link className="compareRoute" to={'/compare-table'}><i className="material-icons">view_list</i></Link>
              </div>
          </div>
          <div className="compareTableContainer">
                  <div className="container-fluid container-scroll watchContainer compareContainer" key={uuid()}>
                    <div className="row">
              {this.props.items.map(item =>
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
  }
}  

export default Compare
