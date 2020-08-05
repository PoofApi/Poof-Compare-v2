import React, { Component } from 'react';
import laptop from '../images/laptop.png';
import study from '../images/study.png';
import fashion from '../images/fashion.png';
import gaming from '../images/gaming.png';
import Poof_Blue from '../images/Poof_Blue.png';
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
                                <img className="img-fluid" src={Poof_Blue} alt="poofMobileLogo2"/>
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
                                    {/* <img className="img-fluid poofLaptopIcon2" src={laptop} alt="poofLaptopIcon2"/> */}
                                    <i className="medium material-icons">laptop_mac</i>
                                    <div className="poofIconName" >Electronics</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">                       
                            <div className="poofBooks">
                                <div className="icon2">
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
                                <div className="icon3">
                                    {/* <img className="img-fluid poofFashionIcon2" src={fashion} alt="poofFashionIcon2"/> */}
                                    <i className="medium material-icons">store</i>
                                    <div className="poofIconName" style={{position: "relative", right: "8px"}}>Clothes/Apparel</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="poofGames">
                                <div className="icon4">
                                    {/* <img className="img-fluid poofGamingIcon2" src={gaming} alt="poofGamingIcon2"/> */}
                                    <i className="medium material-icons">toys</i>
                                    <div className="poofIconName" >Games/Toys</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="poofMobileFooter">
                    <ul>
                        <li><i className="material-icons poofMobileSignIn">perm_identity</i></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MobileHeader;
