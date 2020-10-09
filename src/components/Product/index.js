import React, {Component} from 'react';
import './styles.css';
import './newStyles.css';
import ReactTooltip from 'react-tooltip';
import {store} from '../../index.js';
import {addItemToWatch, removeFromWatch, addToCompare, removeFromCompare} from '../../actions/product.js';
import {FadeTransform} from 'react-animation-components';
import {connect} from 'react-redux';


const axios = require('axios');


async function setWatchList(item){

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


class Product extends Component{
    constructor(props){
        super(props);

        this.handleWatch = this.handleWatch.bind(this);
    }

    handleWatch(watchFxn, product) {
        
        //Assigns item to cache watchlist
        watchFxn(product);
      

        //Adds item to browser watchlist
        store.dispatch(addItemToWatch(product));

        //If user is signed in with email or phone#, item is added to their watchlist on the firebase database as well
        if (store.getState().item.storeUserId !== ""){
            setWatchList(product);
          };
    }

    handleCompare(product) {

        this.props.compare();

        if(this.props.comparedItems && this.props.comparedItems.some(item => item.title.includes(product.title))){
            console.log("remove from compare called");
            console.log("remove called on: ", product);
            store.dispatch(removeFromCompare(product));
        }
        else{
            console.log("add to compare called");
            store.dispatch(addToCompare(product));
        }
    }

    itemInList(item){
        const watchListItems = store.getState().item.watchedItems
        for (let k = 0; k<(watchListItems.length); k++){
            if (item.id == watchListItems[k].id){
                return true;
            }
            else{
                return false;
            }
        }
    }

    removeItem(watchFxn, item){
        watchFxn(item);

        store.dispatch(removeFromWatch(item));
    }

    renderCard(){
        if(this.props.comparedItems){
            return(
                <div className={" " + (this.props.comparedItems.some(item => item.title.includes(this.props.item.title)) ? "compare" : "")} >
                    <div className="card productCard" >
                            {this.props.comparedItems.some(item => item.title.includes(this.props.item.title)) ? <div className="addedToCompare">Added to Compare</div> : <div></div>}
                            <div className="card-image itemImage" style={{display: "flex", justifyContent: "center"}}>
                                    <img src={this.props.item.image} alt={this.props.item.title} style={{height:"250px", width: "60%", marginTop: "25px"}}/>
                                    <div className="btnTool">
                                        <span className={!this.props.item.watch? "btnTooltipText" : ""}>{!this.props.item.watch? "Add to Watchlist" : ""}</span>
                                        <a className="btn-floating halfway-fab floatingWatchBtn indigo darken-4"><i className="material-icons" style={{color: (this.props.item.watch? "red" : "white")}} onClick={(this.props.item.watch) ? () => console.log("If you would like to remove this item from your watchlist, please remove it through the watchlist tab") : () => this.handleWatch(this.props.watch, this.props.item)}>{this.props.item.watch? "favorite" : "remove_red_eye"} </i></a>
                                    </div>             
                                <div className={(this.props.comparedItems.some(item => item.title.includes(this.props.item.title)) ? "card-overlay2" : "card-overlay")}></div>
                                <div className="detailsBtn" onClick={() => this.handleCompare(this.props.item)} style={{color: "black", display: "flex", justifyContent: "center", alignItems:"center"}}>{this.props.comparedItems.some(item => item.title.includes(this.props.item.title)) ? "Remove Compare" : "Compare"}</div>
                            </div>
                            {/* this.props.item.featured && */}
                            {/* <div className="featuredProduct">
                                Featured
                            </div> */}
                            <div className="card-content" style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                                <div className="card-title" style={{ lineHeight:"1.3em" ,fontSize:"18px", overflow:"hidden", position: "relative", bottom: "30%", textAlign: "center"}}>{this.props.item.title}</div>
                                <div className="itemPrice">{`$${this.props.item.price}`}</div>
                                <div>
                                    <a href={`${this.props.item.link}`}  target="_blank" className="productSourceLogo"><img className={"img-fluid" + (this.props.item.logo == "https://firebasestorage.googleapis.com/v0/b/poofapibackend.appspot.com/o/icons%2Fbestbuy.png?alt=media&token=da783e57-802f-4a40-b609-3af1fd78098a" ? " productBestBuyLogo" : " productSourceLogoPic")} src={this.props.item.logo} alt={this.props.item.title}/></a>
                                </div>
                            </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className={" "} >
                    <div className="card productCard" >
                            <div className="card-image itemImage" style={{display: "flex", justifyContent: "center"}}>
                                    <img src={this.props.item.image} alt={this.props.item.title} style={{height:"250px", width: "60%", marginTop: "25px"}}/>
                                    <div className="btnTool">
                                        <span className={!this.props.item.watch? "btnTooltipText" : ""}>{!this.props.item.watch? "Add to Watchlist" : ""}</span>
                                        <a className="btn-floating halfway-fab floatingWatchBtn indigo darken-4"><i className="material-icons" style={{color: (this.props.item.watch? "red" : "white")}} onClick={(this.props.item.watch) ? () => console.log("If you would like to remove this item from your watchlist, please remove it through the watchlist tab") : () => this.handleWatch(this.props.watch, this.props.item)}>{this.props.item.watch? "favorite" : "remove_red_eye"} </i></a>
                                    </div>             
                                <div className="card-overlay"></div>
                                <div className="detailsBtn" onClick={() => this.handleCompare(this.props.item)} style={{color: "black", display: "flex", justifyContent: "center", alignItems:"center"}}>{"Compare"}</div>
                            </div>
                            {/* this.props.item.featured && */}
                            {/* <div className="featuredProduct">
                                Featured
                            </div> */}
                            <div className="card-content" style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                                <div className="card-title" style={{ lineHeight:"1.3em" ,fontSize:"18px", overflow:"hidden", position: "relative", bottom: "30%", textAlign: "center"}}>{this.props.item.title}</div>
                                <div className="itemPrice">{`$${this.props.item.price}`}</div>
                                <div>
                                    <a href={`${this.props.item.link}`}  target="_blank" className="productSourceLogo"><img className={"img-fluid" + (this.props.item.logo == "https://firebasestorage.googleapis.com/v0/b/poofapibackend.appspot.com/o/icons%2Fbestbuy.png?alt=media&token=da783e57-802f-4a40-b609-3af1fd78098a" ? " productBestBuyLogo" : " productSourceLogoPic")} src={this.props.item.logo} alt={this.props.item.title}/></a>
                                </div>
                            </div>
                    </div>
                </div>
            )
        }
    }

    render(){

        return(


                    <div className="row">
                        <div className="col s12 m6">
                            {this.renderCard()}
                        </div>
                    </div>
        )}
} 

const mapStateToProps = (state) => {
    return {
        comparedItems: state.item.comparedItems
    }
}
    

export default connect(mapStateToProps)(Product);
