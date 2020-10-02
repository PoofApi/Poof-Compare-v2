import React, {Component} from 'react';
import './style.css';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';
import {store} from '../../index.js';
import {removeFromCompare} from '../../actions/product.js';
import CompareRow from '../CompareRow';

class CompareFull extends Component {
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
          <div className="hToolbar2">
              <i className="material-icons toggleButton2" onClick={() => this.props.toggleClick()} >expand_more</i>
              <div className="detailsTitle">Poof! Compare</div>
              <div className="compareLinkHolder">
                {/* <Link className="compareRoute" to={'/compare-table'}><i className="material-icons">view_list</i></Link> */}
              </div>
          </div>
          {filteredItems.amazon.length > 0 ? <CompareRow items={filteredItems.amazon}/> : <div></div>}
          {filteredItems.bestbuy.length > 0 ? <CompareRow items={filteredItems.bestbuy}/> : <div></div>}
          {filteredItems.ebay.length > 0 ? <CompareRow items={filteredItems.ebay}/> : <div></div>}
        </div>
    )
  }
}  

export default CompareFull;
