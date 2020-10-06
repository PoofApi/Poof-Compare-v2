import React, { Component } from 'react';
import Poof_White from '../images/Poof_White.png';
import Poof_White_edited from '../images/Poof_White_edited.png';
import poofSloth from '../images/poofSloth.png';
import {store} from '../index.js';
import * as types from '../constants/types';
import '../App.css';
import PoofMobileSignIn from './PoofMobileSignIn';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { FadeTransform } from 'react-animation-components';

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

//Part of getMostPopular function
const getPopItems = (payload) => ({
    type: types.GET_POPULAR,
    payload: payload
})

//Call to backend code which return most popular (aka most "searched") items

async function getMostPopular(){
    console.log("Now fetching most popular items.........")
  
    try{
      let response = await axios({
        method: 'get',
        url: "https://us-central1-poofapibackend.cloudfunctions.net/search-getMostPopular",
        headers: {
          "Authorization": "Bearer b99d951c8ffb64135751b3d423badeafac9cfe1f54799c784619974c29e277ec",
          "Accept" : "application/json",
          "Content-Type" : "application/json",
        }
      })
    
      let items = await response.data;
      store.dispatch(getPopItems(items));
      return items;
  
    }
  
    catch(err){
      console.log("An error occurred with getMostPopular function: ", err);
    }
  }

class DesktopHeader extends Component {

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
            this.setState({loading:false});

        }
        catch(err){
            console.log(err);
        }
    }

    async componentDidMount(){
        getMostPopular();
    }

    render(){

        let urlName = window.location.pathname;

        console.log("Store's popular items", this.props.popularItems);



        return(
            <div className="poofDesktopComponent">
                <div className="poofDesktopBackground"></div>
                <div className="poofOverlay">
                    <div className="container-fluid poofDesktopContainer">
                        {/* <div className="desktopImage" style={{backgroundImage: `url(${bookBackground})`}}>

                        </div> */}
                        <div className="desktopContent">

                        <FadeTransform in
                            transformProps={{
                                exitTransform: 'scale(0.5)',
                            }}
                            
                            duration={600}>
                                    <div className="row justify-content-center">
                                        <div className="col-5 mb-2 mt-4">
                                            <div className="poofDesktopLogo2">
                                                <img className="img-fluid" src={Poof_White} alt="poofDesktopLogo2"/>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="showPoofLogo">
                                        <div className="row justify-content-center">
                                            <div className="col-5 mb-2 mt-4">
                                                <div className="poofDesktopLogo3">
                                                    <img className="img-fluid" src={Poof_Brown} alt="poofDesktopLogo3"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                        </FadeTransform>

                        <FadeTransform in
                            transformProps={{
                                exitTransform: 'scale(0.5)',
                            }}
                            
                            duration={600}>
                            <div className="poofHeadline row justify-content-center">
                                <h1 className="poofTitleText col-12">Welcome to Poof! Price Compare.</h1>
                                <h5 className="poofTitleText col-8 col-md-6">Search and compare items from your favorite big box retailers like Amazon, BestBuy, Ebay, and more, all at the same time!</h5>
                            </div>
                        </FadeTransform>

                            {
                            this.state.loading ? 
                            
                                <div className="row justify-content-center">
                                    <div className="col-6 desktopProgressSearchBar">
                                        <div className="mb-4" style={{fontSize: "20px", color: "white", textAlign: "center"}}>
                                            Just one moment while Poof! finds you the best deals!....
                                        </div>
                                        <div className="exampleContainer justify-content-center mb-4">
                                            <div className="desktopLoadBar1"></div>
                                            <div className="desktopLoadBar2"></div>
                                        </div>
                                    </div>                   
                                </div>
                                // <div className="poofSlothPic">
                                //     <img className="img-fluid" src={poofSloth} alt="poofSloth"/>
                                // </div>
                            
                            :
                                <FadeTransform in
                                    transformProps={{
                                        exitTransform: 'scale(0.5)',
                                    }}
                                    
                                    duration={600}>
                                        <div className="row justify-content-center">
                                            <div className="searchContent col-6">
                                                <form onSubmit={this.handleSubmit}>
                                                    <div className="poofDesktopSearch mb-3">
                                                            <input 
                                                                className="poofDesktopInput" type="text" placeholder="Search for products..." id="search" 
                                                                ref={(input) => {this.searchInput = input; }} type="search" 
                                                                onChange={this.handleChange} onSubmit={this.handleSubmit} value={this.state.value} name="search" required
                                                            />
                                                            <i className="material-icons poofDesktopSearchIcon" onClick={this.handleSubmit}>search</i>
                                                    </div>
                                                </form>
                                                <span><img className="poofExclamation" src={Poof_White_edited} alt="poofExclamation"/></span>
                                            </div>
                                        </div>
                                </FadeTransform>
                            }
                            {/* <div className="fillerBody1"></div> */}
                            <div className="iconContent mb-4 ml-4">
                                <div className="row justify-content-center">
                                    <div className="col-3">
                                        <div className="desktopIcon1 pIcon dIcon ml-4" onClick={() => this.handleSubmit2("electronics")}>
                                            <div className="poofElectronics">
                                                {/* <img className="img-fluid poofLaptopIcon2" src={laptop} alt="poofLaptopIcon2"/> */}
                                                <i className="medium material-icons">laptop_mac</i>
                                                <div className="poofIconName" >Electronics</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">                       
                                        <div className="poofBooks">
                                            <div className="desktopIcon2 pIcon dIcon" onClick={() => this.handleSubmit2("books")}>
                                                {/* <img className="img-fluid poofStudyIcon2" src={study} alt="poofStudyIcon2"/> */}
                                                <i className="medium material-icons">book</i>
                                                <div className="poofIconName" >Books</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">                       
                                        <div className="poofClothes">
                                            <div className="desktopIcon3 pIcon dIcon" onClick={() => this.handleSubmit2("clothes")}>
                                                {/* <img className="img-fluid poofFashionIcon2" src={fashion} alt="poofFashionIcon2"/> */}
                                                <i className="medium material-icons">store</i>
                                                <div className="poofIconName">Clothes/Apparel</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="poofGames">
                                            <div className="desktopIcon4 pIcon dIcon mr-4" onClick={() => this.handleSubmit2("games")}>
                                                {/* <img className="img-fluid poofGamingIcon2" src={gaming} alt="poofGamingIcon2"/> */}
                                                <i className="medium material-icons">toys</i>
                                                <div className="poofIconName" >Games/Toys</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="iconContent iconContent2 mb-4 ml-4">
                                <div className="row">
                                    <div className="col-3 topSearch">
                                        <div className="topCategoryTitle">Top Electronics Searched this Week: </div>
                                        <div className="card topSearchCard" style={{maxWidth: "540px", height: "150px"}}>
                                            <div className="row no-gutters">
                                                <div className="col-md-4" style={{position: "relative", left: "5%", top: "3%"}}>
                                                    <img className="topSearchPic" src={this.props.popularItems[0].imageUrl} alt="topElectricPic"/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body topSearchBody">
                                                        <h5 className="card-title">
                                                            {this.props.popularItems[0].title}
                                                        </h5>
                                                        <div className="card-text">
                                                            <div className="price">
                                                                $10
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 topSearch">
                                        <div className="topCategoryTitle">Top Book Searched this Week: </div>
                                        <div className="card topSearchCard" style={{maxWidth: "540px", height: "150px"}}>
                                            <div className="row no-gutters">
                                                <div className="col-md-4" style={{position: "relative", left: "5%", top: "3%"}}>
                                                    <img className="topSearchPic" src={this.props.popularItems[1].imageUrl} alt="topBookPic"/>                                                
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body topSearchBody">
                                                        <h5 className="card-title">
                                                            {this.props.popularItems[1].title}
                                                        </h5>
                                                        <div className="card-text">
                                                            <div className="price">
                                                                $10
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 topSearch">
                                        <div className="topCategoryTitle">Top Clothes Searched this Week: </div>
                                        <div className="card topSearchCard" style={{maxWidth: "540px", height: "150px"}}>
                                            <div className="row no-gutters">
                                                <div className="col-md-4" style={{position: "relative", left: "5%", top: "3%"}}>
                                                    <img className="topSearchPic" src={this.props.popularItems[2].imageUrl} alt="topClothesPic"/>                                                
                                                </div> 
                                                <div className="col-md-8">
                                                    <div className="card-body topSearchBody">
                                                        <h5 className="card-title">
                                                            {this.props.popularItems[2].title}
                                                        </h5>
                                                        <div className="card-text">
                                                            <div className="price">
                                                                $10
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 topSearch">
                                        <div className="topCategoryTitle">Top Game Searched this Week: </div>
                                        <div className="card topSearchCard" style={{maxWidth: "540px", height: "150px"}}>
                                            <div className="row no-gutters">
                                                <div className="col-md-4" style={{position: "relative", left: "5%", top: "3%"}}>
                                                    <img className="topSearchPic" src={this.props.popularItems[3].imageUrl} alt="topGamePic"/>                                                
                                                </div> 
                                                <div className="col-md-8">
                                                    <div className="card-body topSearchBody">
                                                        <h5 className="card-title">
                                                            {this.props.popularItems[3].title}
                                                        </h5>
                                                        <div className="card-text">
                                                            <div className="price">
                                                                $10
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="poofDesktopFooter">
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        storeUserId: state.item.storeUserId,
        popularItems: state.item.popularItems
    }
}

export default connect(mapStateToProps)(DesktopHeader);
