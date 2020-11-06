import React, { Component } from 'react'
import HeaderComponent2 from '../HeaderComponent2'
import { withRouter } from 'react-router-dom'
import FooterComponentSearchPage from '../FooterComponentSearchPage';
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
                    <div className="col-5 iphone1Text">
                        Search and compare items from major big box retailers!
                    </div>
                </div>
                <div className="row align-items-center iphonePic2Row">
                    <div className="col-5 iphone2Text">
                        Not sure you want to make a purchase just yet? Simply add it to your watchlist!
                    </div>
                    <div className="col-6">
                        <img className="img-fluid iphonePic2" src="https://scrapping-logos.s3.amazonaws.com/V1/Iphone+1.png" alt="poofPhonePic2"/>
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

