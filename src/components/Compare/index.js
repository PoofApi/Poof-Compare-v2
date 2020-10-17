import React, {Component} from 'react';
import './highlightCSS.css';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';
import {store} from '../../index.js';
import {removeFromCompare, resetCompare} from '../../actions/product.js';

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

  resetList(){
    store.dispatch(resetCompare());
  }

  renderPurchaseLogo(item) {

    if(item.logo == "https://firebasestorage.googleapis.com/v0/b/poofapibackend.appspot.com/o/icons%2Fbestbuy.png?alt=media&token=da783e57-802f-4a40-b609-3af1fd78098a"){
      return (
          <div className="row priceSourceAndRemove no-gutters">
            <div className="col-lg-4 compareCol">
              <div className="card-price">
                <b>{`$${item.price}`}</b>
              </div>
            </div>
            <div className="col-lg-5 compareCol">
              <span className="purchaseToolCompare2">
                  <a href={`${item.link}`}  target="_blank" className="productSourceLogo2"><img className="img-fluid productBestBuyLogo2" src={item.logo} alt={item.title}/></a>
              </span>
            </div>
            <div className="col-lg-3 compareCol">
              <span className="removeToolCompare">
                {/* <span className="removeTooltipText">Remove from watchlist</span> */}
                <i className="material-icons removeBtnCompare" onClick={() => store.dispatch(removeFromCompare(item))}>cancel</i>
              </span>
            </div>
          </div>
      )
    }

    if(item.logo == "https://firebasestorage.googleapis.com/v0/b/poofapibackend.appspot.com/o/icons%2Febay.png?alt=media&token=53bf23b1-af93-4de3-b4ed-a2c0f22ff4b6"){
      return (
        <div className="row priceSourceAndRemove no-gutters">
          <div className="col-lg-4 compareCol">
            <div className="card-price">
              <b>{`$${item.price}`}</b>
            </div>
          </div>
          <div className="col-lg-5 compareCol">
            <span className="purchaseToolCompare2">
                <a href={`${item.link}`}  target="_blank" className="productSourceLogo2"><img className="img-fluid productEbayLogo2" src={item.logo} alt={item.title}/></a>
            </span>
          </div>
          <div className="col-lg-3 compareCol">
              <span className="removeToolCompare">
                {/* <span className="removeTooltipText">Remove from watchlist</span> */}
                <i className="material-icons removeBtnCompare" onClick={() => store.dispatch(removeFromCompare(item))}>cancel</i>
              </span>
          </div>
        </div>
      )
    }

    if(item.logo == "https://firebasestorage.googleapis.com/v0/b/poofapibackend.appspot.com/o/icons%2Famazon.png?alt=media&token=e73286c5-d2b5-4474-a20c-acde9beea4ad"){
      return (
        <div className="row priceSourceAndRemove no-gutters">
          <div className="col-lg-4 compareCol">
            <div className="card-price">
              <b>{`$${item.price}`}</b>
            </div>
          </div>
          <div className="col-lg-5 compareCol">
            <span className="purchaseToolCompareAmazon">
                <a href={`${item.link}`}  target="_blank"><img className="img-fluid amazonPic" src={item.logo} alt={item.title}/></a>
            </span>
          </div>
          <div className="col-lg-3 compareCol">
              <span className="removeToolCompare">
                {/* <span className="removeTooltipText">Remove from watchlist</span> */}
                <i className="material-icons removeBtnCompare" onClick={() => store.dispatch(removeFromCompare(item))}>cancel</i>
              </span>
          </div>
        </div>
      )
    }
  }


  render(){

    let filteredItems = this.compareFilter(this.props.items);

    console.log("amazon filter items test ", filteredItems)
    
    return(
        <div className="highlightContainer">
          <div className="hToolbar">
              <div className="expandAndReset">
                <i className="material-icons toggleButton" onClick={() => this.props.toggleClick()} >expand_more</i>
              </div>
              <div className="detailsTitle">Poof! Compare</div>
              <div className="compareLinkHolder">
                <span className="clear-compare-btn" onClick={() => this.resetList()}>Clear List<i className="material-icons clearCompareMaterialIcon">indeterminate_check_box</i></span>
                {/* <Link className="compareRoute" to={'/compare-table'}><i className="material-icons">view_list</i></Link> */}
              </div>
          </div>
              <div className="row compareTableRow">
              {this.props.items.map(item =>
                      <div className="col-6 col-sm-5 col-md-4 col-lg-2 compareCardCol">
                        <div className="card poofCompareCard">
                          <div className="row poofCardRowContent no-gutters">
                            <div className="col-4 col-md-4 col-lg-5 poofCompareImage">
                              <img className="img-fluid poofComparePic2" src={item.image} alt={item.title} key={item.id} />
                            </div>
                            <div className="col-8 col-2 col-md-7 col-lg-6 poofCompareCardBody">
                                <div className="poofCardTitle">{item.title}</div>
                            </div>
                          </div>
                          {this.renderPurchaseLogo(item)}
                        </div>
                      </div>
              )}
                    </div>
        </div>
    )
  }
}  

export default Compare
