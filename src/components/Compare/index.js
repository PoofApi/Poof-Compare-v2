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
        <div className="card-text poofCardText2">
          <div className="compareBtnRowBB">
            <span className="purchaseToolCompare2">
                <a href={`${item.link}`}  target="_blank" className="productSourceLogo2"><img className="img-fluid productBestBuyLogo2" src={item.logo} alt={item.title}/></a>
            </span>
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
        <div className="card-text poofCardText2">
          <div className="compareBtnRow">
            <span className="purchaseToolCompare2">
                <a href={`${item.link}`}  target="_blank" className="productSourceLogo2"><img className="img-fluid productEbayLogo2" src={item.logo} alt={item.title}/></a>
            </span>
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
        <div className="card-text poofCardText2">
          <div className="compareBtnRow">
            <span className="purchaseToolCompare2">
                <a href={`${item.link}`}  target="_blank" className="productSourceLogo2"><img className="img-fluid productSourceLogoPic2" src={item.logo} alt={item.title}/></a>
            </span>
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
                <span className="clear-compare-btn" onClick={() => this.resetList()}>Clear Compare List<i className="material-icons clearCompareMaterialIcon">indeterminate_check_box</i></span>
              </div>
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
                                {this.renderPurchaseLogo(item)}
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

export default Compare
