import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {Compare, ProductList} from '../../components'
import * as productActions from '../../actions/product'
import * as types from '../../constants/types'
import {connect} from 'react-redux';
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
import FooterComponentSearchPage from '../FooterComponentSearchPage';
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
  
  toggleCompareItem = () => {
    if(this.state.compareTableOpen && !this.state.compareToolbarOpen){
      this.closeWatchList();
    }
  }

  toggleCompare = () => {
    this.toggleCompareToolbar();
    this.setState((prevState) => {
      return {compareTableOpen: !prevState.compareTableOpen};
    })
  };

  toggleCompareToolbar = () => {
    this.closeWatchList();
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

  async componentDidMount(){

    //Logic to prevent compareTable and watchlist from being open at the same time on load/re-load
      if(this.state.compareTableOpen && this.props.comparedItems && this.props.comparedItems.length > 0 && this.state.watchListOpen){
        this.closeWatchList();
      }
      
    /* iOS re-orientation fix */
      if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
      /* iOS hides Safari address bar */
      window.addEventListener("load",function() {
          setTimeout(function() {
              window.scrollTo(0, 1);
          }, 1000);
      });
    }

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

  renderCompare(){

    if(this.props.comparedItems && this.props.comparedItems.length > 0){

            
      return(
        <div className="compareTable" style={{display: (this.state.compareToolbarOpen ? "none" : "block")}}>
          {this.props.comparedItems && this.props.comparedItems.length >= 1 && (this.state.compareTableOpen) ? 
            // <Compare items={comparedItems} toggleClick={this.toggleCompare} />
            <Compare items={this.props.comparedItems} toggleClick={this.toggleCompare}/>
          
          :
  
          <div></div> }
        </div>
      )
    }
    else{
      return (
        <div className="filler" style={{display: (this.state.compareToolbarOpen ? "none" : "block")}}>
          {this.props.comparedItems && this.props.comparedItems.length >= 1 && (this.state.compareTableOpen) ? 
            // <Compare items={comparedItems} toggleClick={this.toggleCompare} />
            <Compare items={this.props.comparedItems} toggleClick={this.toggleCompare}/>
          
          :

          <div></div> }
        </div>
      )
    }
  }

  renderWatchToolbar(){
    if(this.props.comparedItems){
      return(
        <WatchToolbar isCompareActive={this.state.compareTableOpen && this.props.comparedItems && this.props.comparedItems.length > 0} toggleClick={this.toggleWatchToolbar} />
      )
    }
    else{
      return <div></div>
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

    console.log("Home mounted");


    const {items, actions, isLoading, watchedItems, usersWatchedItems, storeUserId, mobileStoreFilter, comparedItems } = this.props;

    let revisedItems = this.addId(items);
    
    const storeWatchProducts = watchedItems;

    this.checkIfInWatch();
    this.checkIfInWatch2();


    let mobileFiltered = this.filterMobileItems(items);

    let storeItems = this.storeItemCounter(items);

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
    && !this.state.watchListOpen ? (this.props.comparedItems ? <WatchToolbar isCompareActive={this.state.compareTableOpen && comparedItems && comparedItems.length > 0} toggleClick={this.toggleWatchToolbar} /> : <div></div>) : <div></div> } </div>: 
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

            {mobileStoreFilter ? 
            
              (mobileStoreFilter.includes("all") ?

                  < MultiSelectDisabledComponent key={uuid()} storeItems={storeItems}/>

                  :

                  < MultiSelectComponent key={uuid()} storeItems={storeItems}/>

              ) 
              
              : 
            
              < MultiSelectComponent key={uuid()} storeItems={storeItems}/>}
            {/* <span className="searchWordAndItemCount">{searchWord ? `${searchWord}` : "no search"}</span> */}          

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
          <div className="home mt-5">
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
            <ProductList items={mobileFiltered} compare={this.toggleCompareItem} watch={actions.watch}/>
            {/* <div className="mobile-watchlist">
              <Link className="mobile-watchlist2" to={'/watchlist'}><p data-tip={"My Poof! Watchlist"} ><i className="material-icons mobile-watchlist-icon">view_list</i></p></Link>
              <ReactTooltip />
            </div> */}
            <FooterComponentSearchPage />
            {this.renderCompare()}

           {this.state.compareToolbarOpen && comparedItems && comparedItems.length >= 1 ? <CompareToolbar toggleToolbar={this.toggleCompareToolbar} /> : <div></div> }
          </div>
          <div id="myID" className={this.state.watchListOpen && (storeWatchProducts.length > 0 || usersWatchedItems.length > 0 ) ? "topSideTool hide" : "topTool hide"}>
            <span className={this.state.watchListOpen ? "topSideTooltipText" : "topTooltipText"}></span>
            <a href="#top"><div className={this.state.watchListOpen && (storeWatchProducts && storeWatchProducts.length > 0 || (usersWatchedItems && usersWatchedItems.length > 0) ) ? "topScrollerSide" : (this.state.compareTableOpen 
              && this.props.comparedItems && this.props.comparedItems.length > 0 ? "topScrollerUp" : "topScroller")}><i className="material-icons">expand_less</i></div></a>
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
