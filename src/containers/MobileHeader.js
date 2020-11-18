import React, { Component } from 'react';
import Poof_Blue from '../images/Poof_Blue.png';
import poof_sloth_blue from '../images/poof_sloth_blue.PNG';
import {store} from '../index.js';
import {addSearchWord} from '../actions/product';
import * as types from '../constants/types';
import '../App.css';
import PoofMobileSignIn from './PoofMobileSignIn';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import uuid from 'react-uuid';


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


class MobileHeader extends Component {

    searchInput;
    constructor(props){
        super(props);

        this.state = {
            value: '',
            loading: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    async handleSubmit(event){

        event.preventDefault();
        
        this.setState({loading: true});

        try{
            await getProductsForHome(this.state.value);
            this.props.addSearchWord(this.state.value);
            event.preventDefault();
            this.setState({loading: false});
            this.setState({value: ""});
        }
        catch(err){
            console.log(err);
        }
    }

    async handleSubmit2(searchWord){

        this.setState({loading: true});

        try{
            await getProductsForHome(searchWord);
            this.props.addSearchWord(searchWord);
            this.setState({loading:false});

        }
        catch(err){
            console.log(err);
        }
    }

    prepPopItems = (popItems) => {
        let itemCollection = {};
        let amazonItems = [];
        let barnesItems = [];
        let eggItems = [];
        let ebayItems = [];

        let j = 0;
        let k = 4;
        let l = 8;
        let m = 12;

        while( amazonItems.length < 4 ){
            amazonItems.push(popItems[j])
            j++;
        }

        while( barnesItems.length < 4 ){
            barnesItems.push(popItems[k])
            k++;
        }

        while( eggItems.length < 4 ){
            eggItems.push(popItems[l])
            l++;
        }

        while( ebayItems.length < 4 ){
            ebayItems.push(popItems[m])
            m++;
        }

        itemCollection.amazon = amazonItems;
        itemCollection.barnes = barnesItems;
        itemCollection.newEgg = eggItems;
        itemCollection.ebay = ebayItems;

        return itemCollection;
    }

    render(){

        let urlName = window.location.pathname;

        let preppedItems = this.prepPopItems(this.props.popularItems);

        return(
            (
            this.state.loading?
            
                <div className="poofMobileComponent">
                <div className="container poofMobileContainer">                
                    <div className="loading-content-mobile">
                        <div className="poofSlothRow">
                            <div className="poofSlothPicMobile">
                                <img className="img-fluid" src={poof_sloth_blue} alt="poofSloth"/>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-10 col-sm-8 col-md-4 mobileProgressSearchBar">
                                <div className="mb-4 loadingMobileTitle" style={{fontSize: "18px", color: "#141B4D", fontWeight: "600", textAlign: "center", position: "relative", right: "9px"}}>
                                    Just one moment while Poof! Sloth surfs the web to find you the best deals!....
                                </div>
                                <div className="exampleContainerMobile mb-4">
                                    <div className="loadBar1"></div>
                                    <div className="loadBar2"></div>
                                </div>
                            </div>                   
                        </div>
                    </div>
                    
                    <div className="row justify-content-center">
                        <div className="col-5">
                            <div className="icon1 mobileIcon1 pIcon" onClick={() => this.handleSubmit2("electronics")}>
                                <div className="poofElectronics mobilePoofIcon">
                                    {/* <img className="img-fluid poofLaptopIcon2" src={laptop} alt="poofLaptopIcon2"/> */}
                                    <i className="medium material-icons">laptop_mac</i>
                                    <div className="poofIconName" >Electronics</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">                       
                            <div className="poofBooks mobilePoofIcon">
                                <div className="icon2 mobileIcon2 pIcon" onClick={() => this.handleSubmit2("books")}>
                                    {/* <img className="img-fluid poofStudyIcon2" src={study} alt="poofStudyIcon2"/> */}
                                    <i className="medium material-icons">book</i>
                                    <div className="poofIconName" >Books</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-5">                       
                            <div className="poofClothes mobilePoofIcon">
                                <div className="icon3 mobileIcon3 pIcon" onClick={() => this.handleSubmit2("clothes")}>
                                    {/* <img className="img-fluid poofFashionIcon2" src={fashion} alt="poofFashionIcon2"/> */}
                                    <i className="medium material-icons">store</i>
                                    <div className="poofIconName">Apparel</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="poofGames mobilePoofIcon">
                                <div className="icon4 mobileIcon4 pIcon" onClick={() => this.handleSubmit2("games")}>
                                    {/* <img className="img-fluid poofGamingIcon2" src={gaming} alt="poofGamingIcon2"/> */}
                                    <i className="medium material-icons">toys</i>
                                    <div className="poofIconName" >Games</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="poofMobileFooter">

                <PoofMobileSignIn /> 
                        
                {/* {
                
                this.props.storeUserId !== "" && urlName === "/" ?
                    
                <Link className="poof-mobile-watchlist" to={'/watchlist'}>
                    <i className="material-icons poofMobileWatchlistIcon">view_list</i>
                </Link> 
                
                :

                <div></div>
                } */}
                    
                </div>
            </div>

            :

            <div className="poofMobileComponent">
                <div className="container poofMobileContainer">
                    <div className="row justify-content-center">
                        <div className="col-7 mb-2">
                            <div className="poofMobileLogo2">
                                <img className="img-fluid" src={Poof_Blue} alt="poofMobileLogo2"/>
                            </div>
                        </div>
                    </div>
                    {!this.state.loading && <h6 className="row justify-content-center mobileTitleText" style={{textAlign: "center"}}>
                        Search your favorite big box retailers all at once!
                    </h6>}

                    
                    <div className="row justify-content-center">
                        <div className="col-9">
                            <form onSubmit={this.handleSubmit}>
                                <div className="poofMobileSearch mb-3">
                                        <input 
                                            className="poofMobileInput" type="text" placeholder="Search for products..." id="search" 
                                            ref={(input) => {this.searchInput = input; }} type="search" 
                                            onChange={this.handleChange} onSubmit={this.handleSubmit} value={this.state.value} name="search" required
                                        />
                                        <i className="material-icons poofMobileSearchIcon" onClick={this.handleSubmit}>search</i>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    <div className="row justify-content-center">
                        <div className="col-5">
                            <div className="icon1 mobileIcon1 pIcon" onClick={() => this.handleSubmit2("electronics")}>
                                <div className="poofElectronics mobilePoofIcon">
                                    {/* <img className="img-fluid poofLaptopIcon2" src={laptop} alt="poofLaptopIcon2"/> */}
                                    <i className="medium material-icons">laptop_mac</i>
                                    <div className="poofIconName" >Electronics</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">                       
                            <div className="poofBooks mobilePoofIcon">
                                <div className="icon2 mobileIcon2 pIcon" onClick={() => this.handleSubmit2("books")}>
                                    {/* <img className="img-fluid poofStudyIcon2" src={study} alt="poofStudyIcon2"/> */}
                                    <i className="medium material-icons">book</i>
                                    <div className="poofIconName" >Books</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-5">                       
                            <div className="poofClothes mobilePoofIcon">
                                <div className="icon3 mobileIcon3 pIcon" onClick={() => this.handleSubmit2("clothes")}>
                                    {/* <img className="img-fluid poofFashionIcon2" src={fashion} alt="poofFashionIcon2"/> */}
                                    <i className="medium material-icons">store</i>
                                    <div className="poofIconName">Apparel</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="poofGames mobilePoofIcon">
                                <div className="icon4 mobileIcon4 pIcon" onClick={() => this.handleSubmit2("games")}>
                                    {/* <img className="img-fluid poofGamingIcon2" src={gaming} alt="poofGamingIcon2"/> */}
                                    <i className="medium material-icons">toys</i>
                                    <div className="poofIconName" >Games</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="topSellersMobile">
                    <div className="topSellerContainer">
                        <div className="topSellerHeader">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-9" style={{display: "flex", alignItems: "center"}}>
                                            <img className="img-fluid" src="https://scrapping-logos.s3.amazonaws.com/V1/pinkline.png" alt="pinkLinePic" style={{height: "1vh"}}/>
                                        </div>
                                        <div className="col-3">
                                            <img className="img-fluid" src="https://scrapping-logos.s3.amazonaws.com/V1/firework2.png" alt="fireworkPic"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-12" style={{textAlign: "center"}}>
                                            <h1 className="topSellerTitle">
                                                Top Selling Items
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-12" style={{textAlign: "center"}}>
                                            <h5 className="topSellerSubTitle">
                                                From your favorite big box retailers
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-3">
                                            <img className="img-fluid" src="https://scrapping-logos.s3.amazonaws.com/V1/firework2.png" alt="fireworkPic"/>
                                        </div>
                                        <div className="col-9" style={{display: "flex", alignItems: "center"}}>
                                            <img className="img-fluid" src="https://scrapping-logos.s3.amazonaws.com/V1/pinkline.png" alt="pinkLinePic" style={{height: "1vh"}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {preppedItems.amazon[0] !== undefined &&
                            <div className="amazonRow">
                                <div className="row topSellerLogoRow">
                                    <div className="col-4">
                                        <img className="img-fluid amazonTopSeller" src="https://scrapping-logos.s3.amazonaws.com/V1/amazon.png" alt="amazonTopSellerLogo"/>
                                    </div>
                                </div>
                                <div className="row" style={{position: "relative", bottom: "5vh"}}>
                                    
                                    {preppedItems.amazon.map(item => 
                                        <div className="col-6 col-md-6 col-lg-3" key={uuid()}>
                                                <div className="card topSellerCard">
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <img src={item.image} className="img-fluid topSellerItemImg" alt="sample"/>
                                                        </div>
                                                        <div className="col-8">
                                                            <div className="card-body">
                                                                <h6 className="card-title topSellerItemTitle">{item.title}</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row topSellerBuyRow">
                                                        <div className="col-5 topSellerPrice">{`${item.price}`}</div>
                                                        <div className="col-6 watchlistButtons">
                                                            <a href={item.itemUrl} target="_blank"><img className="img-fluid amazonBuyPic" src="https://scrapping-logos.s3.amazonaws.com/V1/amazon.png" alt="amazonBuyLogo"/></a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    )}
                                    
                                </div>
                                <div className="topSellerOverlay"></div>
                            </div>
                        }
                        {preppedItems.barnes[0] !== undefined &&
                            <div className="barnesRow">
                                <div className="row topSellerLogoRow" style={{position: "relative", top: "8vh"}}>
                                    <div className="col-4" style={{display: "flex", justifyContent: "center"}}>
                                        <img className="img-fluid topSellerLogo barnesTopSeller" src="https://scrapping-logos.s3.amazonaws.com/V1/barnes-and-noble-png-logo-hq-5295.png" alt="barnesTopSellerLogo"/>
                                    </div>
                                </div>
                                <div className="row" style={{position: "relative", top: "14vh"}}>
                                    {preppedItems.barnes.map(item => 
                                        <div className="col-6 col-md-6 col-lg-3" key={uuid()}>
                                                <div className="card topSellerCard">
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <img src={item.image} className="img-fluid topSellerItemImg" alt="sample"/>
                                                        </div>
                                                        <div className="col-8">
                                                            <div className="card-body">
                                                                <h6 className="card-title topSellerItemTitle">{item.title}</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row topSellerBuyRow">
                                                        <div className="col-5 topSellerPrice">{`${item.price}`}</div>
                                                        <div className="col-6 watchlistButtons">
                                                            <a href={item.itemUrl} target="_blank"><img className="img-fluid barnesBuyPic" src="https://scrapping-logos.s3.amazonaws.com/V1/barnes-and-noble-png-logo-hq-5295.png" alt="barnesBuyLogo"/></a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    )}
                                </div>
                                <div className="topSellerOverlay"></div>
                            </div>
                        }
                        {preppedItems.newEgg[0] !== undefined &&
                            <div className="newEggRow">
                                <div className="row topSellerLogoRow">
                                    <div className="col-4" style={{display: "flex", justifyContent: "center"}}>
                                        <img className="img-fluid topSellerLogo newEggTopSeller" src="https://scrapping-logos.s3.amazonaws.com/V1/newegg.png" alt="newEggTopSellerLogo"/>
                                    </div>
                                </div>
                                <div className="row">
                                    {preppedItems.newEgg.map(item => 
                                        <div className="col-6 col-md-6 col-lg-3" key={uuid()}>
                                                <div className="card topSellerCard">
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <img src={item.image} className="img-fluid topSellerItemImg" alt="sample"/>
                                                        </div>
                                                        <div className="col-8">
                                                            <div className="card-body">
                                                                <h6 className="card-title topSellerItemTitle">{item.title}</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row topSellerBuyRow">
                                                        <div className="col-5 topSellerPrice">{`${item.price}`}</div>
                                                        <div className="col-6 watchlistButtons">
                                                            <a href={item.itemUrl} target="_blank"><img className="img-fluid newEggBuyPic" src="https://scrapping-logos.s3.amazonaws.com/V1/newegg.png" alt="newEggBuyLogo"/></a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    )}
                                </div>
                                <div className="topSellerOverlay"></div>
                            </div>
                        }
                        {preppedItems.ebay[0] !== undefined &&
                            <div className="ebayRow">
                                <div className="row topSellerLogoRow">
                                    <div className="col-4" style={{display: "flex", justifyContent: "center"}}>
                                        <img className="img-fluid topSellerLogo ebayTopSeller" src="https://scrapping-logos.s3.amazonaws.com/V1/ebay.png" alt="ebayTopSellerLogo"/>
                                    </div>
                                </div>
                                <div className="row">
                                    {preppedItems.ebay.map(item => 
                                        <div className="col-6 col-md-6 col-lg-3" key={uuid()}>
                                                <div className="card topSellerCard">
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <img src={item.image} className="img-fluid topSellerItemImg" alt="sample"/>
                                                        </div>
                                                        <div className="col-8">
                                                            <div className="card-body">
                                                                <h6 className="card-title topSellerItemTitle">{item.title}</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row topSellerBuyRow">
                                                        <div className="col-5 topSellerPrice">{`${item.price}`}</div>
                                                        <div className="col-6 watchlistButtons">
                                                            <a href={item.itemUrl} target="_blank"><img className="img-fluid ebayBuyPic" src="https://scrapping-logos.s3.amazonaws.com/V1/ebay.png" alt="ebayBuyLogo"/></a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    )}
                                </div>
                                <div className="topSellerOverlay"></div>
                            </div>
                        }
                    </div>
                </div>
                <div className="poofMobileFooter">

                <PoofMobileSignIn /> 
                        
                {/* {
                
                this.props.storeUserId !== "" && urlName === "/" ?
                    
                <Link className="poof-mobile-watchlist" to={'/watchlist'}>
                    <i className="material-icons poofMobileWatchlistIcon">view_list</i>
                </Link> 
                
                :

                <div></div>
                } */}
                    
                </div>
            </div>
            ) 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        storeUserId: state.item.storeUserId,
        popularItems: state.item.popularItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSearchWord: (word) => { dispatch(addSearchWord(word)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileHeader);
