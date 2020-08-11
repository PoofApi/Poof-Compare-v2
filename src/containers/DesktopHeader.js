import React, { Component } from 'react';
import Poof_White from '../images/Poof_White.png';
import {store} from '../index.js';
import * as types from '../constants/types';
import '../App.css';
import PoofMobileSignIn from './PoofMobileSignIn';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import bookBackground from '../images/bookBackground.jpg';


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

    render(){

        let urlName = window.location.pathname;



        return(
            <div className="poofDesktopComponent">
                <div className="poofOverlay">
                    <div className="container-fluid poofDesktopContainer">
                        {/* <div className="desktopImage" style={{backgroundImage: `url(${bookBackground})`}}>

                        </div> */}
                        <div className="desktopContent">

                            <div className="row justify-content-center">
                                <div className="col-5 mb-2 mt-4">
                                    <div className="poofDesktopLogo2">
                                        <img className="img-fluid" src={Poof_White} alt="poofDesktopLogo2"/>
                                    </div>
                                </div>
                            </div>

                            <div className="poofHeadline row justify-content-center">
                                <h1 className="poofTitleText col-12">Welcome to Poof! Price Compare.</h1>
                                <h4 className="poofTitleText col-8">The best way to search the web for the best deals! Search your favorite big box retailers all at once!</h4>
                            </div>

                            {
                            this.state.loading ? 
                            
                                <div className="row justify-content-center">
                                    <div className="col-10 desktopProgressSearchBar">
                                        <div className="mb-4" style={{fontSize: "20px", color: "white", textAlign: "center"}}>
                                            Just one moment while Poof! finds you the best deals!....
                                        </div>
                                        <div className="exampleContainer justify-content-center mb-4">
                                            <div className="desktopLoadBar1"></div>
                                            <div className="desktopLoadBar2"></div>
                                        </div>
                                    </div>                   
                                </div>
                            
                            :
                                <div className="row justify-content-center">
                                    <div className="col-9">
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
                                    </div>
                                </div>
                            }
                            {/* <div className="fillerBody1"></div> */}
                            <div className="iconContent mb-4">
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
                                                <div className="poofIconName" style={{position: "relative", right: "8px"}}>Clothes/Apparel</div>
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
        storeUserId: state.item.storeUserId
    }
}

export default connect(mapStateToProps)(DesktopHeader);