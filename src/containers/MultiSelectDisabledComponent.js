import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import '../App.css';
import * as types from '../constants/types';
import {store} from '../index.js';
import {connect} from 'react-redux';


//set mobile filter function
const setMobileSelect = (payload) => ({
  type: types.SET_MOBILE_FILTER,
  payload: payload
})

class MultiSelectDisabledComponent extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

    console.log(this.props);


    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
  
    var filterSelect = document.getElementById("filterSelect");
    filterSelect.addEventListener("change", function() {
      let instance =  M.FormSelect.getInstance(filterSelect);
      console.log("Current multi select values: ",instance.getSelectedValues());

      const filters = instance.getSelectedValues();

      store.dispatch(setMobileSelect(filters));
    });
    
}

  handleChange(event){
    console.log(event);
    console.log(event.target.value);
  }

  renderSearchWord = (word) => {
    if(word === "electronics" || word === "books" || word === "clothes" || word === "games"){
      return (
        <div className="col-lg-5 col-md-5 col-sm-5 col-5 searchAndCountContainer">
          <div className="searchAndCountGroup">
            <div className="searchWordAndItemCount">{`Displaying search results for category: "${word}"`}</div>
            {this.props.items ? <div className="searchCount">{`Total items found: ${this.props.items.length}`}</div> : <div></div> }
          </div>
        </div>
      )
    }
    else{
      return (
        <div className="col-lg-5 col-md-5 col-sm-5 col-5 searchAndCountContainer">
          <div className="searchAndCountGroup">
            <div className="searchWordAndItemCount">{`Displaying search for: "${word}"`}</div>
            {this.props.items ? <div className="searchCount">{`Total items found: ${this.props.items.length}`}</div> : <div></div> }
          </div>
        </div>
      )
    }
  }

  render() {

    const { searchWord, items } = this.props;

    return (
      <div key={this.props.key} className="row multiSelectRow">
        <div className="col-lg-5 col-md-5 col-sm-5 col-6">
          <div className="multiSelectComponent">
            <div
                ref={FormSelect => {
                  this.FormSelect = FormSelect;
                }}
                id="select"
                className="select"
            >
              <div className="input-field col s12">
                <select id="filterSelect" className="storeOptions" multiple>
                  <option value="" disabled selected>Show items from</option>
                  <option value="all" selected>{`All Stores (${this.props.storeItems.all})`}</option>
                  <option value="amazon" disabled selected>{`Amazon (${this.props.storeItems.amazon})`}</option>
                  <option value="bestbuy" disabled selected>{`BestBuy (${this.props.storeItems.bestbuy})`}</option>
                  <option value="ebay" disabled selected>{`Ebay (${this.props.storeItems.ebay})`}</option>
                </select>
                <label>Store Filter</label>
              </div>
            </div>
          </div>
        </div>
        {this.renderSearchWord(searchWord)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      searchWord: state.item.searchWord,
      items: state.item.items
  }
}

export default connect(mapStateToProps)(MultiSelectDisabledComponent);
