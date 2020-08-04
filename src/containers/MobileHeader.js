import React, { Component } from 'react';
import laptop from '../images/laptop.png';
import study from '../images/study.png';
import fashion from '../images/fashion.png';
import gaming from '../images/gaming.png';
import Poof_White from '../images/Poof_White.png';
import '../App.css';


class MobileHeader extends Component {
    constructor(props){
        super(props);

        this.state = {

        };
    }

    render(){

        return(
            <div className="poofMobileComponent">
                <div className="container poofMobileContainer">
                    <div className="row">
                        <div className="col-7 mb-2">
                            <div className="poofMobileLogo2">
                                <img className="img-fluid" src={Poof_White} alt="poofMobileLogo2"/>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-9">
                            <div className="poofMobileSearch mb-3">
                                <input className="poofMobileInput" type="text" placeholder="Search for products..." name="search"/>
                                <i className="material-icons poofMobileSearchIcon">search</i>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-5">
                            <div className="icon1">
                                <div className="poofElectronics">
                                    <img className="img-fluid poofLaptopIcon2" src={laptop} alt="poofLaptopIcon2"/>
                                    <div>Electronics</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">                       
                            <div className="poofBooks">
                                <div className="icon2">
                                    <img className="img-fluid poofStudyIcon2" src={study} alt="poofStudyIcon2"/>
                                    <div>Books</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-5">                       
                            <div className="poofClothes">
                                <div className="icon3">
                                    <img className="img-fluid poofFashionIcon2" src={fashion} alt="poofFashionIcon2"/>
                                    <div style={{position: "relative", right: "8px"}}>Clothes/Apparel</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="poofGames">
                                <div className="icon4">
                                    <img className="img-fluid poofGamingIcon2" src={gaming} alt="poofGamingIcon2"/>
                                    <div>Electronics</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="poofMobileFooter">
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MobileHeader;
