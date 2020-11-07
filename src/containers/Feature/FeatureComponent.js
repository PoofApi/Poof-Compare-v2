import React, { Component } from 'react'
import HeaderComponent2 from '../HeaderComponent2'
import { withRouter } from 'react-router-dom'
import FooterComponentSearchPage from '../FooterComponentSearchPage'
import './featureStyle.css'


class FeatureComponent extends Component {

    componentDidMount(){
        document.querySelector('body').scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        });
    
        let menu = document.querySelector(".hideScroller");
        let ele = document.querySelector("body")
        ele.addEventListener("scroll", () => {
            let y = ele.scrollTop;
            
            if (y >= 100) {
                if(menu){
                    menu.className = "desktopTopScroller";
                }
            } else {
                if(menu){
                    menu.className = "hideScroller"
                }
            }
          }, true);
    }

    render() {
        return (
            <div>
            <div id="desktopTop2"></div>
            <HeaderComponent2/>
            <div className="container-fluid featureContainer">
                <div className="featureComponentBanner">
                    <h2 className="featureTitle">
                        Features
                    </h2>
                    <div className="featureTitleBody">
                        <h1 className="featureTitleText">Introducing Poof! Price Compare</h1>
                        <p className="featureTitleTextContent">A better, more comprehensive way to shop online! Shop smart, save time, and find yourself the best value for your dollar!</p>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-6">
                        <img className="img-fluid iphonePic1" src="https://scrapping-logos.s3.amazonaws.com/V1/Iphone+2.png" alt="poofPhonePic"/>
                    </div>
                    <div className="col-5 iphone1TextBody">
                        <div className="iphone1Text">
                            Search and Compare
                        </div>
                        <div>
                            With just one search, you can view and compare items from big box retailers, all in one tab!
                        </div>
                    </div>
                </div>
                <div className="row align-items-center iphonePic2Row">
                    <div className="col-5 iphone2TextBody">
                        <div className="iphone2Text">
                            Watchlist!
                        </div>
                        <div>
                            Not so sure you want to make a purchase just yet? Simply add it to your watchlist for later!
                        </div>
                    </div>
                    <div className="col-6">
                        <img className="img-fluid iphonePic2" src="https://scrapping-logos.s3.amazonaws.com/V1/Iphone+1.png" alt="poofPhonePic2"/>
                    </div>
                </div>
                <div className="gifInstruction">
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <div className="gifInstructionText">
                                Compare and Buy Smart!
                            </div>
                            <div className="gifInstructionTextBody mt-4">
                                As demonstrated in the video below, after performing a search, go ahead and add or remove items to your Poof! Compare Table to assist you in making your smart purchases!
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center gifInstructionVid">
                        <div className="col-6">
                            <img className="img-fluid" src="https://scrapping-logos.s3.amazonaws.com/V1/featuresGif.gif" alt="featureGifInstruction"/>
                        </div>
                    </div>
                </div>
            </div>
            <a id="myID" className="hideScroller" href="#desktopTop2">
                Return to Top
            </a>
            <FooterComponentSearchPage />
        </div>
        )
    }
}

export default withRouter(FeatureComponent)

