import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from 'react-router-dom';
import '../App.css';
import {resetSearch, resetWatchList, logOutUser, resetEntireWatch} from '../actions/product';
import {store} from '../index.js';
import * as types from '../constants/types';
import poofMobileLogoWhiteGradient from '../images/poofMobileLogoWhiteGradient.png';
import Poof_White from '../images/Poof_White.png';
import MobileSignIn from './MobileSignIn';
import ReactTooltip from 'react-tooltip';
import MobileSignIn3 from "./MobileSignIn3";
import {connect} from 'react-redux';


const axios = require('axios');

//Part of getProductsForHome function
const getItems2 = (payload) => ({
    type: types.FETCH_PRODUCTS2,
    payload: payload
  })

//Code to fetch items from backend

async function getProductsForHome(keywords){
  console.log("Now fetching items.........")

  try{
    let response = await axios({
      method: 'post',
      url: "https://us-central1-poofapibackend.cloudfunctions.net/search-bestprice",
      headers: {
        "Authorization": "Bearer b99d951c8ffb64135751b3d423badeafac9cfe1f54799c784619974c29e277ec",
        "Accept" : "application/json",
        "Content-Type" : "application/json",
      },
      data: {"keywords" : keywords},
    })
  
    let items = await response.data;
    console.log(items);
    let storeWatch = store.getState().item.watchedItems;
    console.log(storeWatch);
    store.dispatch(getItems2(items.items));

  }

  catch(err){
    alert(err, "Please reload your browser");
    console.log("An error occurred!!!!!: ", err);
  }
}


class Header2 extends Component {
    constructor(props){
        super(props);

        this.state = {
            value:'',
            loading: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    } 

    unWatchProducts(){
        let items = this.props.items;
        for (let k = 0; k < items.length; k++){
            items[k].watch = false;
        }
    }

    returnHome(){
        store.dispatch(resetSearch());
    }

    async resetWatch(){
        await this.unWatchProducts();
        store.dispatch(resetWatchList());
    }

    resetUser(){
        store.dispatch(logOutUser());
        alert("You have successfully logged out!")
    }

    async handleSubmit(event){
        
        this.setState({loading: true});

        try{
            await getProductsForHome(this.state.value);
            event.preventDefault();
            this.setState({loading: false});
            this.setState({value: ""});
        }
        catch(err){
            console.log(err);
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleLogOut(){
        this.props.logOutUser();
        this.props.resetEntireWatch();
    }
    
    componentDidMount(){

        var urlName = window.location.pathname;
        
        if (urlName !== "/watchlist" ){
            let sidenav = document.querySelector('#slide-out');
            M.Sidenav.init(sidenav, {});
        }
    }
    

    render(){
        
        const user = this.props.storeUserId;
        
        return (
            
                <div className="newNavBar">
                        
                    <div onClick={() => this.returnHome()} className="poofLogo">
                        <Link className="newPoofLogo" to={'/'}><img src={Poof_White} alt="poofWhiteLogo" style={{width:"85%"}}></img></Link>
                    </div>
                    <div onClick={() => this.returnHome()} className="poofPic">
                        <img src={poofMobileLogoWhiteGradient} alt="gradientPoofPicture" style={{width: "55%", marginBottom: "5px"}}/>
                    </div>
                    {!this.state.loading ? 
                        
                            <div className="col-8 col-sm-6 col-md-4">
                                <form onSubmit={this.handleSubmit} className="mobileSearchForm2">
                                    <span>
                                        <input type="text" onChange={this.handleChange} value={this.state.value} placeholder="Search for products..." name="search"/>
                                    </span>
                                    <span>
                                        <button onClick={this.handleSubmit} type="submit"><i className="material-icons mobileSearchPageIcon">search</i></button>
                                    </span>
                                </form>
                            </div>

                        :
                            <div className="col-8 col-sm-2 col-md-4 mobileSearchProgress">
                                <div className="progressMobileSearchPage">
                                    <div className="progress-value-mobileSearchPage"></div>
                                </div>
                            </div>
                        
                    }    
                        
                    {user == "" ? <MobileSignIn3 /> : <div className="logOutUserWatchDesktop" onClick={() => this.handleLogOut()}><p data-tip={"Click to log out"} ><i className="material-icons logOutDesktop">cloud_off</i></p></div>}<ReactTooltip />
                    <span className="mobile-watchlist3">
                        <Link className="mobile-watchlist4" to={'/watchlist'}><p data-tip={"My Poof! Watchlist"} ><i className="material-icons mobile-watchlist-icon2">view_list</i></p></Link>
                        <ReactTooltip />
                    </span>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        watchedItems: state.item.watchedItems,
        usersWatchedItems: state.item.usersWatchedItems,
        storeUserId: state.item.storeUserId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOutUser: () => {dispatch(logOutUser())},
        resetEntireWatch: () => {dispatch(resetEntireWatch())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header2);