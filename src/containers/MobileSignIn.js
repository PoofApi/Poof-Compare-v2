import React, { Component } from "react";
import M from "materialize-css";
import {auth} from '../firebase.js';
import '../App.css';
import {saveUser, resetWatchList, addSignInWatch, setWatchList} from '../actions/product';
import {store} from '../index.js';

function resetWatch(){
    store.dispatch(resetWatchList());
}

class MobileSignIn extends Component {
    constructor(props){
        super(props);

        this.state={
            userId: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({userId: event.target.value});
    }

    handleSubmit() {
        store.dispatch(saveUser(this.state.userId));
    }

    componentDidMount() {
        

        const options = {
        onOpenStart: () => {
            console.log("Open Start");
        },
        onOpenEnd: () => {
            console.log("Open End");
        },
        onCloseStart: () => {
            console.log("Close Start");
        },
        onCloseEnd: () => {
            console.log("Close End");
        },

        inDuration: 250,
        outDuration: 250,
        opacity: 0.5,
        dismissible: true,
        startingTop: "4%",
        endingTop: "10%"
        };
        M.Modal.init(this.MobileSignIn, options);
        
        this.loginInput.focus();
    }

    
    render() {

        return (
            <div className="mobileLogin">
              <span
                className="modal-trigger logInMobile"
                data-target="modal2"
              >
                Load List
              </span>
      
              <div
                ref={MobileSignIn => {
                  this.MobileSignIn = MobileSignIn;
                }}
                id="modal2"
                className="modal signUpUser"
              >
              <div className="modal-content">
                <div className="headerContainer" style={{display: "flex", justifyContent: "center", color: "black"}}>
                    <h4>Load your saved list</h4>
                </div>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input placeholder="Please enter your email or phone #" id="userId" type="text" className="mobileInput validate" type="text" ref={(input) => {this.loginInput = input; }} onChange={this.handleChange} value={this.state.userId} required></input>
                            </div>
                        </div>
                        <div className="row" style={{display:"flex", justifyContent: "center"}}>
                            <div >
                                <a onClick={this.handleSubmit} className="btn submit-button modal-close" style={{marginRight: "20px"}}>Submit</a>
                            </div>
                            <div>
                                <a className="btn close-button modal-close">Close</a>
                            </div>
                        </div>
                    </form>
                </div>
              </div>
              </div>
            </div>
              

          );
    }
}

export default MobileSignIn;