import React, { Component } from 'react';
import Poof_Blue from '../images/Poof_Blue.png';
import {store} from '../index.js';
import * as types from '../constants/types';
import '../App.css';
import PoofMobileSignIn from './PoofMobileSignIn';

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

    render(){

        return(
            <div className="poofMobileComponent">
                <div className="container poofMobileContainer">
                    <div className="row">
                        <div className="col-7 mb-2">
                            <div className="poofMobileLogo2">
                                <img className="img-fluid" src={Poof_Blue} alt="poofMobileLogo2"/>
                            </div>
                        </div>
                    </div>

                    {
                    this.state.loading ? 
                    
                        <div className="col-10 col-sm-8 col-md-4 mobileProgressSearchBar">
                            <div className="mb-4" style={{fontSize: "20px", color: "black", fontWeight: "600", textAlign: "center"}}>
                                Just one moment while Poof! finds you the best deals!....
                            </div>
                            <div className="exampleContainer mb-4">
                                <div className="loadBar1"></div>
                                <div className="loadBar2"></div>
                            </div>
                        </div>                   
                    
                    :
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
                    }
                    <div className="row justify-content-center">
                        <div className="col-5">
                            <div className="icon1 pIcon" onClick={() => this.handleSubmit2("electronics")}>
                                <div className="poofElectronics">
                                    {/* <img className="img-fluid poofLaptopIcon2" src={laptop} alt="poofLaptopIcon2"/> */}
                                    <i className="medium material-icons">laptop_mac</i>
                                    <div className="poofIconName" >Electronics</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">                       
                            <div className="poofBooks">
                                <div className="icon2 pIcon" onClick={() => this.handleSubmit2("books")}>
                                    {/* <img className="img-fluid poofStudyIcon2" src={study} alt="poofStudyIcon2"/> */}
                                    <i className="medium material-icons">book</i>
                                    <div className="poofIconName" >Books</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-5">                       
                            <div className="poofClothes">
                                <div className="icon3 pIcon" onClick={() => this.handleSubmit2("clothes")}>
                                    {/* <img className="img-fluid poofFashionIcon2" src={fashion} alt="poofFashionIcon2"/> */}
                                    <i className="medium material-icons">store</i>
                                    <div className="poofIconName" style={{position: "relative", right: "8px"}}>Clothes/Apparel</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="poofGames">
                                <div className="icon4 pIcon" onClick={() => this.handleSubmit2("games")}>
                                    {/* <img className="img-fluid poofGamingIcon2" src={gaming} alt="poofGamingIcon2"/> */}
                                    <i className="medium material-icons">toys</i>
                                    <div className="poofIconName" >Games/Toys</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="poofMobileFooter">
                    <PoofMobileSignIn />
                </div>
            </div>
        )
    }
}

export default MobileHeader;
