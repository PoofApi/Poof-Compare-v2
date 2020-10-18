import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from 'react-router-dom';
import '../App.css';
import Modal from './Modal.js';
import Modal2 from './Modal2.js';
import loadingBarBrown from '../images/loadingBarBrown.gif';
import {store} from '../index.js';
import * as types from '../constants/types';
import Loading from './LoadingComponent.js';
import MobileSignIn from './MobileSignIn';
import MobileSignIn2 from './MobileSignIn';
import poofWithBackground from '../images/poofWithBackground.jpg';


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
        url: "http://207.244.254.216:8080/search",
        headers: {
          "Content-Type" : "application/json"
        },
        data: {"keyword" : keywords},
      })
    
      let items = await response.data;
      console.log(items);
      let storeWatch = store.getState().item.watchedItems;
      console.log(storeWatch);
      store.dispatch(getItems2(items));
  
    }
  
    catch(err){
      alert(err, "Please reload your browser");
      console.log("An error occurred!!!!!: ", err);
    }
  }

class Header extends Component {

    searchInput;
    constructor(props){
        super(props);

        this.state = {
            value: '',
            loading: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit2(searchWord){
        getProductsForHome(searchWord);
        this.setState({loading:true});
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handlePoofClick(){
        window.location.reload(false);
    }


    componentDidMount(){
        if ( this.searchInput ) {
            this.searchInput.focus();
        }

        var urlName = window.location.pathname;

        if (urlName !== "/watchlist" ){
            let sidenav = document.querySelector('#slide-out');
            M.Sidenav.init(sidenav, {});
        }
    }

    render(){


        return (
            <div className="jumbo">
                {/* <img className="d-none d-sm-block" src={piggy3} />
                <img className="d-block d-sm-none mobileFrontPic" src={piggy3} /> */}
                <nav className="transparent d-none d-sm-block">
                    <div className="d-none d-sm-block nav-wrapper" style={{borderBottom: "1px solid"}}>
                        <a href="#" className="brand-logo newPoofLogo2">Poof!</a>
                    </div>
                </nav>
                <div className="d-block d-sm-none mobileBanner">
                    <div className="mobileDesktopLogo">
                        <img className="poofMobileLogo" onClick={this.handlePoofClick} src={poofWithBackground} alt="poofPicture" style={{width: "80px", marginBottom: "5px"}}/>
                    </div>
                </div>

                <div className="row desktopFrontPage" style={{paddingTop: "180px", display: "flex", justifyContent: "center"}}>
                    <div className="col-12 d-none d-sm-block">
                        <h4 style={{textAlign: "center", fontSize: "48px", fontFamily: "Roboto"}} className="mb-3 flow-text white-text"><b>Welcome to Poof! Auto-Compare!</b></h4>
                    </div>
                    <div className="col-12 d-block d-sm-none">
                        <h4 style={{textAlign: "center", fontSize: "48px", fontFamily: "Roboto"}} className="mb-3 flow-text white-text"><b>Poof! Auto-Compare!</b></h4>
                    </div>
                    
                    {
                    this.state.loading ? 
                    
                        <div className="col-8 col-sm-8 col-md-5 mainPageProgressBar">
                            <div style={{fontSize: "20px", color: "white", textAlign: "center"}}>
                                Just one moment while Poof! finds you the best deals!....
                            </div>
                            <div className="progress">
                                <div className="indeterminate"></div>
                            </div>
                        </div>                   
                    
                    :
                
                    <div className="col-12 col-md-5" style={{display: "flex", justifyContent: "center"}}>
                        <form style={{width: "100%"}} onSubmit={this.handleSubmit}>
                            <div className="input-field searchBox" style={{display: "flex", justifyContent: "center"}}>
                                <input 
                                    className="browser-default search-field" style={{display: "flex", paddingLeft: "25px", width: "100%", 
                                    height: "6vh", marginTop: "20px"}} id="search" ref={(input) => {this.searchInput = input; }} type="search" 
                                    onChange={this.handleChange} value={this.state.value} required>
                                </input>
                                <label onClick={this.handleSubmit} type="submit" value="Submit" style={{top:"45%", left:"95%"}} className="label-icon" for="search"><i style={{position:"absolute"}} className="material-icons">search</i></label>
                            </div>
                        </form>
                    </div>
                
                    }

                    <div className="col-12 col-md-12 categories" style={{marginTop: "15px", display: "flex", justifyContent: "center", fontFamily: "Roboto"}}>
                        <ul style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                            <li onClick={() => this.handleSubmit2("electronics")} className="laptopIcon" style={{margin: "10px", padding: "20px", paddingLeft: "37px", paddingRight: "37px", textAlign: "center", borderRadius: "5px", border: "3px solid", color: "white"}}>
                            <i className="medium material-icons">laptop_mac</i>
                                <div>Electronics</div>
                            </li>
                            <li onClick={() => this.handleSubmit2("books")} className="bookIcon" style={{margin: "10px", padding: "20px", paddingLeft: "44px", paddingRight: "44px", textAlign: "center", borderRadius: "5px", border: "3px solid", color: "white"}}>
                            <i className="medium material-icons">book</i>
                                <div>Books</div>
                            </li>
                            <li onClick={() => this.handleSubmit2("clothes")} className="houseIcon" style={{margin: "10px", padding: "20px", textAlign: "center", borderRadius: "5px", border: "3px solid", color: "white"}}>
                            <i className="medium material-icons">store</i>
                                <div>Clothes/Apparel</div>
                            </li>
                            <li onClick={() => this.handleSubmit2("games")} className="toyIcon" style={{margin: "10px", padding: "20px", paddingLeft: "30px", paddingRight: "30px", textAlign: "center", borderRadius: "5px", border: "3px solid", color: "white"}}>
                            <i className="medium material-icons">toys</i>
                                <div>Games/Toys</div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/*Display for mobile screens*/}
                
                <div className="row d-block d-sm-none mobileFrontPage" style={{display: "flex", justifyContent: "center"}}>
                    <div className="col-12 d-none d-sm-block">
                        <h4 style={{textAlign: "center", fontSize: "35px", fontFamily: "Roboto"}} className="mb-3 flow-text white-text"><b>Welcome to Poof! Auto-Compare!</b></h4>
                    </div>
                    <div className="col-12 d-block d-sm-none">
                        <h4 style={{textAlign: "center", fontSize: "35px", fontFamily: "Roboto"}} className="mb-3 flow-text white-text"><b>Poof! Auto-Compare!</b></h4>
                    </div>
                    
                    {
                    this.state.loading ? 
                    
                        <div className="col-10 col-sm-8 col-md-4 mobileProgressSearchBar">
                            <div style={{fontSize: "20px", color: "white", textAlign: "center"}}>
                                Just one moment while Poof! finds you the best deals!....
                            </div>
                            <div className="progressMobile">
                                <div className="progress-value-mobile"></div>
                            </div>
                        </div>                   
                    
                    :
                
                        <div className="offset-2 col-11 col-sm-6 col-md-4">
                            <form onSubmit={this.handleSubmit} className="mobileSearchForm">
                                <span>
                                    <input type="text" onChange={this.handleChange} value={this.state.value} placeholder="Search for products..." name="search"/>
                                </span>
                                <span>
                                    <button onClick={this.handleSubmit} type="submit"><i className="material-icons">search</i></button>
                                </span>
                            </form>
                        </div>
                
                    }

                    <div className="col-12 col-md-12 categories mobileCategories" style={{display: "flex", justifyContent: "center", fontFamily: "Roboto"}}>
                        <ul style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                            <li onClick={() => this.handleSubmit2("electronics")} className="laptopIcon" style={{margin: "10px", padding: "20px", paddingLeft: "37px", paddingRight: "37px", textAlign: "center", borderRadius: "5px", border: "3px solid", color: "white"}}>
                            <i className="medium material-icons">laptop_mac</i>
                                <div>Electronics</div>
                            </li>
                            <li onClick={() => this.handleSubmit2("books")} className="bookIcon" style={{margin: "10px", padding: "20px", paddingLeft: "44px", paddingRight: "44px", textAlign: "center", borderRadius: "5px", border: "3px solid", color: "white"}}>
                            <i className="medium material-icons">book</i>
                                <div>Books</div>
                            </li>
                            <li onClick={() => this.handleSubmit2("clothes")} className="houseIcon" style={{margin: "10px", padding: "20px", textAlign: "center", borderRadius: "5px", border: "3px solid", color: "white"}}>
                            <i className="medium material-icons">store</i>
                                <div>Clothes/Apparel</div>
                            </li>
                            <li onClick={() => this.handleSubmit2("games")} className="toyIcon" style={{margin: "10px", padding: "20px", paddingLeft: "30px", paddingRight: "30px", textAlign: "center", borderRadius: "5px", border: "3px solid", color: "white"}}>
                            <i className="medium material-icons">toys</i>
                                <div>Games/Toys</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="d-block d-sm-none mobileFooter">

                </div>
            </div>
            
        )
    }
}


export default Header;