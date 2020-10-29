import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {store} from '../index.js';
import * as types from '../constants/types';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {addSearchWord} from '../actions/product';


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

class FooterComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            loading: false
        }

        this.handleSubmit3 = this.handleSubmit3.bind(this);
    }

    async handleSubmit3(keyword){
        this.setState({loading: true});

        try{
            await getProductsForHome(keyword);
            
            let urlName = window.location.pathname;
                if (urlName == "/aboutPoof" ){
                    this.props.history.push("/")
                }

            this.props.addSearchWord(keyword);
            this.setState({loading: false});
        }
        catch(err){
            console.log(err);
            this.setState({loading: false});
        }
    }

    render() {
        return (
            <div className="poofDesktopFooter">
                <div className="container footerContainer">
                    <ul className="footerTitles">
                        <li>
                            {!this.state.loading ? 

                            <div>
                                <h4>Search Categories</h4>
                                <ul>
                                    <li onClick={() => this.handleSubmit3("electronics")}>Electronics</li>
                                    <li onClick={() => this.handleSubmit3("books")}>Books</li>
                                    <li onClick={() => this.handleSubmit3("clothes")}>Clothes</li>
                                    <li onClick={() => this.handleSubmit3("games")}>Games</li>
                                </ul>
                            </div>

                            :

                            <div className="footerLoading" style={{textAlign: "center"}}>
                                <h4 className="footerSearching">Searching....</h4>
                                <div className="preloader-wrapper active" style={{position: "relative", top: "2vh"}}>
                                    <div className="spinner-layer spinner-red-only">
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
                            
                        </li>
                        <li>
                            <h4>Links</h4>
                            <ul>
                                <li><Link className="aboutLinkFooter" to={'/aboutPoof'}>About</Link></li>
                                <li>Features</li>
                                <li>Contact Us</li>
                                <li>Terms</li>
                                <li>Privacy</li>
                            </ul>
                        </li>
                    </ul>
                    <div className="row justify-content-center">             
                        <div className="col-auto">
                            <p>© 2020 Poof! Price Compare</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searchWord: state.item.searchWord
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSearchWord: (word) => {dispatch(addSearchWord(word))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FooterComponent))