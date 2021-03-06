import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {store} from '../index.js';
import * as types from '../constants/types';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { addSearchWord, resetSearch } from '../actions/product';


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
    store.dispatch(getItems2(items.items));

  }

  catch(err){
    alert(err, "Please reload your browser");
    console.log("An error occurred!!!!!: ", err);
  }
}

class FooterComponentSearchPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            loading: false
        }

        this.handleSubmit3 = this.handleSubmit3.bind(this);
    }

    componentDidMount(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        });
    }

    async handleSubmit3(keyword){
        this.setState({loading: true});

        try{
            await getProductsForHome(keyword);
            
            let urlName = window.location.pathname;
                if (urlName == "/aboutPoof" || urlName == "/featuresPoof" || urlName == "/contactPoof" || urlName == "/poof-terms-and-conditions"
                || urlName == "/poof-privacy-policy" || urlName == "/poof-cookies-policy"){
                    this.props.history.push("/")
                }

            this.setState({loading: false});

            document.querySelector("body").scrollTo({
                top: 0,
                left: 0,
                behavior: 'auto'
            });

            this.props.addSearchWord(keyword);
        }
        catch(err){
            console.log(err);
            this.setState({loading: false});
        }
    }

    renderFooterName(){
        let urlName = window.location.pathname;

        if (urlName == "/aboutPoof" || urlName == "/featuresPoof" || 
        urlName == "/poof-terms-and-conditions" || urlName == "/poof-privacy-policy" || 
        this.props.items.length > 0 || urlName == "/poof-cookies-policy"){
            return "poofSearchPageFooter";
        }

        else if(urlName == "/contactPoof"){
            return "poofDesktopFooter"
        }

        else{
            return "poofSearchPageFooterDesktop"
        }
    }

    renderReturnHome(){
        let urlName = window.location.pathname;

        const returnHome = () => {
            this.props.resetSearch();
        }

        if (urlName == "/aboutPoof" || urlName == "/contactPoof" || urlName == "/featuresPoof" || 
        urlName == "/poof-terms-and-conditions" || urlName == "/poof-privacy-policy" || urlName == "/poof-cookies-policy"){
            return <div onClick={() => returnHome()}><Link className="returnToHomeFromFooter footerReturn" to={'/'}>Return To Home</Link></div>;
        }

        else if(urlName == "/" && this.props.items.length > 0){
            return <div className="returnToHomeFromSearchPage footerReturn" onClick={() => returnHome()}>Return To Home</div>
        }

        else {
            return <a className="returnToHomeFromDesktop" href="#desktopTop"><h5 className="footerReturn" style={{fontWeight: "900"}}>Return To Home</h5></a>
        }
    }

    renderFooterTitles(){
        let urlName = window.location.pathname;

        if (urlName == "/aboutPoof" || urlName == "/contactPoof" || urlName == "/featuresPoof" || 
        urlName == "/poof-terms-and-conditions" || urlName == "/poof-privacy-policy" || urlName == "/poof-cookies-policy"){
            return "footerTitles footerSearchTitle";
        }

        else{
            return "footerTitlesDesktop footerSearchTitle"
        }
    }

    renderFooterLinks(){
        let urlName = window.location.pathname;

        if (urlName == "/aboutPoof" || urlName == "/contactPoof" || urlName == "/featuresPoof" || 
        urlName == "/poof-terms-and-conditions" || urlName == "/poof-privacy-policy" || urlName == "/poof-cookies-policy"){
            return "footerLinks";
        }

        else{
            return "footerLinksDesktop"
        }
    }

    render() {

        return (
            <div className={this.renderFooterName()}>
                <div className="container-fluid footerContainer">
                    <div className="row no-gutters" style={{justifyContent: "space-between"}}>
                        <div className="d-none d-sm-none d-md-block col-2 justify-content-center" style={{display: "flex"}}>
                            <h5 className={this.renderFooterTitles()} style={{fontWeight: "900"}}>Search Categories</h5>
                        </div>
                        <div className="col-2 col-md-1 align-items-center" style={{display: "flex", flexDirection: "column"}}>
                            <div className="d-block d-sm-block d-md-none mobileSearchTitle mobileTitle">Search</div>
                            {!this.state.loading ?
                                <div>
                                    <ul className="footerTitleV2">
                                        <li onClick={() => this.handleSubmit3("electronics")}>Electronics</li>
                                        <li onClick={() => this.handleSubmit3("books")}>Books</li>
                                        <li onClick={() => this.handleSubmit3("clothes")}>Clothes</li>
                                        <li onClick={() => this.handleSubmit3("games")}>Games</li>
                                    </ul>
                                </div>
                            
                            :

                                <div className="footerLoading">
                                    {/* <h4 className="footerSearching">Searching....</h4> */}
                                    <div className="preloader-wrapper active" style={{position: "relative", top: "2vh"}}>
                                        <div className="spinner-layer spinner-blue-only">
                                        <div className="circle-clipper left">
                                            <div className="circle"></div>
                                        </div><div className="gap-patch">
                                            <div className="circle"></div>
                                        </div><div className="circle-clipper right">
                                            <div className="circle"></div>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                            }

                        </div>
                        <div className="d-none d-sm-none d-md-block col-1 justify-content-center" style={{display: "flex"}}>
                            <h5 className="footerInfo" style={{fontWeight: "900"}}>Information</h5>
                        </div>
                        <div className="col-2 col-md-1 justify-content-center" style={{display: "flex"}}>
                            <ul>
                                <li className="d-block d-sm-block d-md-none mobileInfoTitle mobileTitle">Info</li>
                                <li><Link className="aboutLinkFooter footerLinkV2" id={this.renderFooterLinks()} to={'/aboutPoof'}>About</Link></li>
                                <li><Link className="featureLinkFooter footerLinkV2" id={this.renderFooterLinks()} to={'/featuresPoof'}>Features</Link></li>
                                <li><Link className="termsLinkFooter footerLinkV2" id={this.renderFooterLinks()} to={'/poof-terms-and-conditions'}>Terms</Link></li>
                                <li><Link className="privacyLinkFooter footerLinkV2" id={this.renderFooterLinks()} to={'/poof-privacy-policy'}>Privacy</Link></li>
                                <li><Link className="cookiesLinkFooter footerLinkV2" id={this.renderFooterLinks()} to={'/poof-cookies-policy'}>Cookies</Link></li>
                            </ul>
                        </div>
                        <div className="d-none d-sm-none d-md-flex col-2 justify-content-center" style={{display: "flex"}}>
                            <h5 className="footerContact" style={{fontWeight: "900"}}>Hi! Contact Us</h5>
                        </div>
                        <div className="col-4 col-md-2 align-items-center" style={{display: "flex", flexDirection: "column"}}>
                            <div className="d-block d-sm-block d-md-none mobileContactTitle mobileTitle">Hi! Contact Us</div>
                            <div><Link className="contactLinkFooter footerLinkV2" id={this.renderFooterLinks()} to={'/contactPoof'}>Poof! Contact Page</Link></div>
                            <div><h6 className="footerEmail">epalumbo@poofapi.com</h6></div>
                        </div>
                        <div className="col-4 col-md-2">
                            <div style={{display: "flex", justifyContent: "center"}}>{this.renderReturnHome()}</div>
                            <div style={{display: "flex", justifyContent: "center"}}><img className="img-fluid" style={{height: "7vh"}} src="https://scrapping-logos.s3.amazonaws.com/V1/perry_face.png" alt="perryPic"/></div>
                            <div style={{display: "flex", justifyContent: "center", textAlign: "center"}}>© 2020 Poof! Price Compare</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searchWord: state.item.searchWord,
        items: state.item.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSearchWord: (word) => {dispatch(addSearchWord(word))},
        resetSearch: () => {dispatch(resetSearch())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FooterComponentSearchPage))
