import React, {Component} from 'react';
import './style.css';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';
import {store} from '../../index.js';
import {removeFromCompare} from '../../actions/product.js';

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
          <div className="compareTableContainer">
                  <div className="container-fluid container-scroll watchContainer compareContainer" key={uuid()}>
                    <div className="row">
              {this.props.items.map(item =>
                      <div className="col-4 col-md-2">
                        <div className="card poofCompareCard">
                          <div className="row">
                            <div className="col-md-4 poofCompareImage">
                              <img src={item.image} alt={item.title} key={item.id} style={{width: "50px", height: "70px"}}/>
                            </div>
                            <div className="card-price" style={{position: "absolute", left: "10%", bottom: "8%", color: "#e64949"}}>
                              <b>{`$${item.price}`}</b>
                            </div>
                            <div className="col-2 col-md-7 poofCompareCardBody">
                              <div className="card-body">
                                <div className="poofCardTitle">{item.title}</div>
                                <div className="card-text poofCardText">
                                  <div className="compareBtnRow">
                                    <span className="removeToolCompare">
                                      {/* <span className="removeTooltipText">Remove from watchlist</span> */}
                                      <i className="material-icons removeBtnCompare" onClick={() => store.dispatch(removeFromCompare(item))}>cancel</i>
                                    </span>
                                    <span className="purchaseToolCompare">
                                      {/* <span className="purchaseTooltipTextCompare">Go to product source</span> */}
                                      <a href={`${item.itemUrl ? item.itemUrl : item.link}`}  target="_blank" className="purchaseLinkBtnAnchorCompare"><i className="material-icons purchaseLinkIconBtnCompare">launch</i></a>
                                    </span>
                                  </div>
                                </div>
                              </div>
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

export default CompareFull;
