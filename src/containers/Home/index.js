import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {Compare, ProductList} from '../../components'
import * as productActions from '../../actions/product'
import {connect} from 'react-redux';
import Header from '../HeaderComponent.js';
import Header2 from '../HeaderComponent2.js';
import CompareToolbar from '../compareToolbar.js';
import WatchList from '../WatchListComponent.js';
import WatchToolbar from '../WatchToolbarComponent.js';
import Loading from '../LoadingComponent.js';
import './styles.css';
import {store} from '../../index.js';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import uuid from 'react-uuid';
import MobileHeader from '../MobileHeader';
import DesktopHeader from '../DesktopHeader';
import MultiSelectComponent from '../MultiSelectComponent';
import MultiSelectDisabledComponent from '../MultiSelectDisabledComponent';
import CompareFull from '../../components/CompareFullScreen';
// import { TransitionGroup } from 'react-transition-group';


const axios = require('axios');

const getTitles = (list) => {

  let titles = [];
  list.forEach(element => titles.push(element.title));
  
  return titles;
}



async function setWatchList(item, storedList){

  //Helper function to prevent duplicate entry into user's watchlist
  let titles = getTitles(storedList);
  console.log(titles);
  console.log(titles.includes(item.title));

  if (!titles.includes(item.title)){

    try{
      let response = await axios({
        method: 'post',
        url: "https://us-central1-poofapibackend.cloudfunctions.net/watchList-setWatchlistItem",
        headers: {
          "Authorization": "Bearer b99d951c8ffb64135751b3d423badeafac9cfe1f54799c784619974c29e277ec",
          "Accept" : "application/json",
          "Content-Type" : "application/json",
        },
        data: {
            "userId" : store.getState().item.storeUserId,
            "title" : item.title,
            "itemUrl" : item.link,
            "price" : item.price,   
            "image" : item.image,
            "itemId": item.id         
        },
      })
    
      let confirmation = await response.data;
      console.log("Successfully added item to firebase watchlist!: ", confirmation, item.title);
    }
  
    catch(err){
      console.log(err, "Unable to set items into watchlist");
    }
  }

  else{
    return console.log("Item already exists in user's list!");
  }
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function userType(email){
  if (validateEmail(email)){
    return "email";
  }
  else{
    return "text";
  }
}

async function getWatchList(){

  if(store.getState().item.storeUserId !== ""){
    try{
      let response = await axios({
        method: 'post',
        url: "https://us-central1-poofapibackend.cloudfunctions.net/watchList-getWatchListItems",
        headers: {
          "Authorization": "Bearer b99d951c8ffb64135751b3d423badeafac9cfe1f54799c784619974c29e277ec",
          "Accept" : "application/json",
          "Content-Type" : "application/json",
        },
        data: {
            "userId" : store.getState().item.storeUserId       
        },
      })
    
      let confirmation = await response.data;
      console.log("Successfully retrieved watchlist!: ", confirmation);
      return confirmation;
    }
  
    catch(err){
      console.log(err, "Unable to retrieve watchlist");
    }
  }
  else {
    return console.log("User is not signed in");
  }
}


class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      compareTableOpen: true,
      compareToolbarOpen: false,
      watchListOpen: true,
      watchToolbarOpen: false,
      watchItemsState: this.props.items.filter(item => item.watch),
      storeFilter: []
    };

  }
  

  toggleCompare = () => {
    this.toggleCompareToolbar();
    this.setState((prevState) => {
      return {compareTableOpen: !prevState.compareTableOpen};
    })
  };

  toggleCompareToolbar = () => {
    this.setState({compareTableOpen: true});
    this.setState((prevState) => {
      return {compareToolbarOpen: !prevState.compareToolbarOpen};
    })
  };

  closeWatchList = () => {
    this.setState({watchListOpen: false});
    this.setState({watchToolbarOpen: true});
  };

  toggleWatchToolbar = () => {
    this.setState({watchListOpen: true});
    this.setState({watchToolbarOpen: false});
  }

  saveList = () => {
    const watchItems = this.props.items.filter(item => item.watch);
    console.log("User's current watchlist: ", watchItems);
  }

  compareLists(items, storeWatchItems){
    for (let k = 0; k < storeWatchItems.length; k++){
      let watchItemName = storeWatchItems[k].title;

      for (let j=0; j < items.length; j++){
        let itemName = items[j].title;
        if (itemName == watchItemName){
          items[j].watch = true;
        }
      }
    }
  }

  addId(items){
    for(let item of items){
      if(!item.id){
        item.id = uuid();
      }
    }

    return items;
  }

  checkIfInWatch(){
    const products = this.props.items;
    const storeWatch = this.props.watchedItems;
  
    this.compareLists(products, storeWatch);
  }

  checkIfInWatch2(){
    const products = this.props.items;
    const usersWatch = this.props.usersWatchedItems;

    this.compareLists(products, usersWatch);
  }

  async getUsersItems(){
    let usersItems = await getWatchList();
    return usersItems;
  }

  myScrollFunc() {
    // var myID = document.getElementById("myID");
    
    // var y = window.scrollY;
    //   console.log(y);
    //   if (y >= 800) {
    //       myID.className = "bottomMenu show"
    //   } else {
    //       myID.className = "bottomMenu hide"
    //   }

    console.log(window.scrollY);
  };

  async componentDidMount(){

    let ele = document.querySelector("body");
    let menu = document.getElementById("myID");
    // const itemCounter = document.getElementById("counter")
    ele.addEventListener("scroll", () => {
      let y = ele.scrollTop;
      if (y >= 100) {
        if(menu){
          menu.className = "show"
        }
    } else {
        if(menu){
          menu.className = "hide"
        }
    }
    }, true);

    if(this.props.storeUserId !== ""){
      
      if(this.props.watchedItems){
        let previousWatchItems = this.props.watchedItems;
        await previousWatchItems.map(item => setWatchList(item, this.props.usersWatchedItems));
      }
      
      let items = await this.getUsersItems();
      if(items){
        store.dispatch(this.props.actions.loadUsersItems(items));
      }
    }


  }

  

  handleLogOut(){
    const searchItems = this.props.items
    if (this.props.storeUserId == ""){
      for (let k = 0; k < searchItems.length; k++){
        searchItems[k].watch = false;
      }
    }
  }

  async handleCheckChange(e) {
    let isChecked = e.target.checked;
    let value = e.target.value;
    console.log("value: ", value);
    console.log( typeof value);

    if(isChecked){
      await this.setState(state => {
        const storeFilter = [...state.storeFilter, value];

        return {
          storeFilter
        }
      });
    }

    else if (!isChecked){

      await this.setState(state => {
        const storeFilter = state.storeFilter.filter( source => 
        source !== value);

        return {
          storeFilter
        }
      })
    }

    console.log(isChecked);
    console.log("state's store filter: ", this.state.storeFilter);
  }

  storeItemCounter(items){
    let amazon = 0;
    let bestbuy = 0;
    let ebay = 0;
    let fullCount = 0;

    let itemCount = {};

    for (const item of items) {
      fullCount++;

      if (item.source === "amazon"){
        amazon++;
      }
      if (item.source === "bestbuy"){
        bestbuy++;
      }
      if (item.source === "ebay"){
        ebay++;
      }
    }

    itemCount = {
      "amazon": amazon,
      "bestbuy": bestbuy,
      "ebay" : ebay,
      "all" : fullCount
    }

    return itemCount;
  }

  filterMobileItems(items) {
    let filtered = [];

    if(this.props.mobileStoreFilter && this.props.mobileStoreFilter.includes("all")){
      return items;
    }

    if(this.props.mobileStoreFilter) {

      if(this.props.mobileStoreFilter.includes("amazon")){
        for (let item of items){
          if (item.source === "amazon"){
            filtered.push(item);
          }
        }
      }
      
      if(this.props.mobileStoreFilter.includes("bestbuy")){
        for (let item of items){
          if (item.source === "bestbuy"){
            filtered.push(item);
          }
        }
      }
  
      if(this.props.mobileStoreFilter.includes("ebay")){
        for (let item of items){
          if (item.source === "ebay"){
            filtered.push(item);
          }
        }
      }

    }


    if(filtered.length > 0){
      return filtered;
    }

    else{
      return items;
    }
  }

  filterItems(i){

    let filtered = [];

    if(this.state.storeFilter.includes("amazon")){
      console.log("filterItems fxn for amazon REACHED");
      for (let item of i){
        if (item.source === "amazon"){
          filtered.push(item);
        }
      }
    }
    
    if(this.state.storeFilter.includes("bestbuy")){
      for (let item of i){
        if (item.source === "bestbuy"){
          filtered.push(item);
        }
      }
    }

    if(this.state.storeFilter.includes("ebay")){
      for (let item of i){
        if (item.source === "ebay"){
          filtered.push(item);
        }
      }
    }


    if(filtered.length > 0){
      return filtered;
    }

    else{
      return i;
    }
  }


  async setAlert(targetPrice, item){

    const user = store.getState().item.storeUserId;
    const type = userType(user);
    console.log("setAlert function has been called......")
  
    try{
      let response = await axios({
        method: 'post',
        url: "https://us-central1-poofapibackend.cloudfunctions.net/alert-setAlert",
        headers: {
          "Authorization": "Bearer b99d951c8ffb64135751b3d423badeafac9cfe1f54799c784619974c29e277ec",
          "Accept" : "application/json",
          "Content-Type" : "application/json",
        },
        data: {
            "userId" : store.getState().item.storeUserId,
            "title" : item.title,
            "itemUrl" : item.link ? item.link : item.itemUrl,
            "price" : item.price,
            "itemId": item.id ? item.id : item.itemId,  
            "which": type,
            "priceTarget": targetPrice         
        },
      })
    
      let confirmation = await response.data;
      alert(`Successfully set an alert for ${item.title}!`, confirmation);
    }
  
    catch(err){
      alert(err, `We're very sorry. Poof! was unable to set an alert for ${item.title}. Please try again later.`);
    }
  }

  componentDidUpdate(){
    // console.log("Product items: ", this.props.items);
    let ele = document.querySelector("body");
    let menu = document.getElementById("myID");
    // const itemCounter = document.getElementById("counter")
    ele.addEventListener("scroll", () => {
      let y = ele.scrollTop;
      if (y >= 100) {
        if(menu){
          menu.className = "show"
        }
    } else {
        if(menu){
          menu.className = "hide"
        }
    }
    }, true);
  }


  render() {

    

    const {items, actions, isLoading, watchedItems, usersWatchedItems, storeUserId, mobileStoreFilter, comparedItems } = this.props;

    let revisedItems = this.addId(items);
    
    const storeWatchProducts = watchedItems;

    this.checkIfInWatch();
    this.checkIfInWatch2();


    let mobileFiltered = this.filterMobileItems(items);

    console.log(items);
    let storeItems = this.storeItemCounter(items);
    console.log(storeItems);

    let ele = document.querySelector("body");
    let menu = document.getElementById("myID");
    // const itemCounter = document.getElementById("counter")
    ele.addEventListener("scroll", () => {
      let y = ele.scrollTop;
      if (y >= 100) {
        if(menu){
          menu.className = "show"
        }
    } else {
        if(menu){
          menu.className = "hide"
        }
    }
    }, true);


    return (
      
      <div style={{height: "100vh"}}>

    {this.props.items.length > 0 ? <div><Header2 user={this.props.storeUserId} items={this.props.items} /> {(storeWatchProducts.length > 0 || usersWatchedItems.length > 0)
    && (this.state.watchListOpen) ? <WatchList alert={this.setAlert} items={this.props.storeUserId !== "" ? 
    usersWatchedItems : storeWatchProducts} products={this.props.items} user={this.props.storeUserId} toggleClick={this.closeWatchList} saveClick={this.saveList} 
    watch={actions.watch} /> : <div></div>} {(this.props.storeUserId !== "" ? usersWatchedItems.length > 0 : storeWatchProducts.length > 0) 
    && !this.state.watchListOpen ? <WatchToolbar toggleClick={this.toggleWatchToolbar} /> : <div></div> } </div>: 
        <div style={{height: "100vh"}}>
          
          <div className="d-block d-sm-block d-md-none d-lg-none mobileHeaderContainer" style={{height: "100vh"}}>
              <MobileHeader />
          </div>
          <div className="d-none d-sm-none d-md-block desktopHeaderContainer">
              <DesktopHeader />
          </div>
        </div>
        }

        {/* <TransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
        </TransitionGroup> */}
        
          {/* <div id="myID" className="bottomMenu hide"></div> */}

        {this.props.items.length > 0 && 
        
        <div id="home" className="productHome">

          {mobileStoreFilter.includes("all") ?

          < MultiSelectDisabledComponent storeItems={storeItems}/>
          
          :
          
          < MultiSelectComponent storeItems={storeItems}/>

          }

          {/* <div id="counter" className="itemsPerStore show2">
            <div className="itemsPerStoreContent">
              <span style={{position: "relative", left: "7px"}}>Total Items:</span>
              <ol className="storeList">
                <li className="storeListItem">{`Amazon (${storeItems.amazon})`}</li>
                <li className="storeListItem">{`BestBuy (${storeItems.bestbuy})`}</li>
                <li className="storeListItem">{`Ebay (${storeItems.ebay})`}</li>
              </ol>
            </div>
          </div> */}

          <div id="top"></div>
          <div className="home mt-5" style={{position: "relative", bottom: "35px"}}>
            {/* <div className="filterAndSort">
              <span className="filterTitle">Filter: </span>
                <label class="container">Amazon
                    <input onChange={e => this.handleCheckChange(e)} type="checkbox" value="amazon"/>
                    <span className="poofCheckBox"></span>
                </label>
                <label class="container">Ebay
                    <input onChange={e => this.handleCheckChange(e)} type="checkbox" value="ebay"/>
                    <span className="poofCheckBox"></span>
                </label>
                <label class="container">Best Buy
                    <input onChange={e => this.handleCheckChange(e)} type="checkbox" value="bestbuy"/>
                    <span className="poofCheckBox"></span>
                </label>
            </div> */}
            <ProductList items={mobileFiltered} compare={actions.compare} watch={actions.watch}/>
            {/* <div className="mobile-watchlist">
              <Link className="mobile-watchlist2" to={'/watchlist'}><p data-tip={"My Poof! Watchlist"} ><i className="material-icons mobile-watchlist-icon">view_list</i></p></Link>
              <ReactTooltip />
            </div> */}
            <div className={comparedItems.length > 0 ? "compareTable2" : "filler"} style={{display: (this.state.compareToolbarOpen ? "none" : "block")}}>
              {comparedItems.length >= 1 && (this.state.compareTableOpen) ? 
                // <Compare items={comparedItems} toggleClick={this.toggleCompare} />
                <CompareFull items={comparedItems} toggleClick={this.toggleCompare}/>
              
              :

              <div></div> }
           </div>

           {this.state.compareToolbarOpen && comparedItems.length >= 1 ? <CompareToolbar toggleToolbar={this.toggleCompareToolbar} /> : <div></div> }
          </div>
          <div id="myID" className={this.state.watchListOpen && (storeWatchProducts.length > 0 || usersWatchedItems.length > 0 ) ? "topSideTool hide" : "topTool hide"}>
            <span className={this.state.watchListOpen ? "topSideTooltipText" : "topTooltipText"}></span>
            <a href="#top"><div className={this.state.watchListOpen && (storeWatchProducts.length > 0 || usersWatchedItems.length > 0 ) ? "topScrollerSide" : "topScroller"}><i className="material-icons">expand_less</i></div></a>
          </div>
        </div>
        }
      </div>
     
    )
  }
}

export default connect(
  state => ({
    items: state.item.items,
    comparedItems: state.item.comparedItems,
    watchedItems: state.item.watchedItems,
    usersWatchedItems: state.item.usersWatchedItems,
    storeUserId: state.item.storeUserId,
    mobileStoreFilter: state.item.mobileStoreFilter
  }),
  dispatch => ({
    actions: bindActionCreators(productActions, dispatch)
  })
)(Home)
