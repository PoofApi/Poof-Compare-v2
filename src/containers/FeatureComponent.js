import React, { Component } from 'react'

export default class FeatureComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row phoneOneContent">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-3 poofPhone">
                                    <img className="img-fluid" src={Iphone2} alt=""/>
                                </div>
                                <div className="col-7 poofPhoneBody">
                                    lorem ipsum jifjeif eeijfoiaj jpfoeijioaj fo fpeijajfojeojf
                                    iejfioejf pijeofjaiofe  poejfioajoefij
                                    ejfioejaiofe fijeijaifj iejf;iajfei;je eij;iq;wnf;mw;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="containerfluid">
                    <div className="row phoneTwoContent">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-7 poofPhoneBody">
                                    lorem ipsum jifjeif eeijfoiaj jpfoeijioaj fo fpeijajfojeojf
                                    iejfioejf pijeofjaiofe  poejfioajoefij
                                    ejfioejaiofe fijeijaifj iejf;iajfei;je eij;iq;wnf;mw;
                                </div>
                                <div className="col-3 poofPhone">
                                    <img className="img-fluid" src={Iphone1} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
