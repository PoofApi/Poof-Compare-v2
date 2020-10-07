import React, { Component } from 'react';

export default class topCategoryComponent extends Component {
    render() {
        return (
            <div className="topCategoryComponent">
                <div className="iconContent iconContent2 mb-4 ml-4">
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
                </div>
            </div>
        )
    }
}
