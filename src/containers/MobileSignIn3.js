import React, { Component } from "react";
import M from "materialize-css";
import '../App.css';
import {saveUser} from '../actions/product';
import ReactTooltip from 'react-tooltip';
import {connect} from 'react-redux';


class MobileSignIn3 extends Component {

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

    async handleSubmit() {
        await this.props.saveUser(this.state.userId);
        window.location.reload(false);
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
        M.Modal.init(this.MobileSignIn3, options);
        
    }

    
    render() {

        return (
            <div className="mobileRouteLogin2">
              <div className="loadListIcon modal-trigger" data-target="modal4"><p><i className="material-icons desktopLoadWatchlist2">perm_identity</i></p></div>
              <div
                ref={MobileSignIn3 => {
                  this.MobileSignIn3 = MobileSignIn3;
                }}
                id="modal4"
                className="modal desktopSignUp"
              >
              <div className="modal-content">
                <div className="headerContainer" style={{display: "flex", justifyContent: "center"}}>
                    <h3 className="modalTitle2">Load your saved list</h3>
                </div>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="userId" type="text" className="mobileInput validate" onChange={this.handleChange} value={this.state.userId} required></input>
                                <label for="userId">Please provide the email or phone number that your Poof! account is linked to.</label>
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

const mapStateToProps = (state) => {
    return {
        storeUserId: state.item.storeUserId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveUser: (user) => { dispatch(saveUser(user)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileSignIn3);