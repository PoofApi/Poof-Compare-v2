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
    }

    render() {
        return (
            <div>
            <HeaderComponent2 />
            <div className="container-fluid featureContainer">
                <h2 className="featureTitle">
                    Features
                </h2>
                <div className="featureComponentBanner">
                    <div className="featureTitleBody">
                        <h1 className="featureTitleText">Introducing Poof! Price Compare</h1>
                        <p className="featureTitleTextContent">A better, more comprehensive way to shop online! Shop smart, save time, and still find the best value for your dollar!</p>
                    </div>
                </div>
            </div>
            <FooterComponentSearchPage />
        </div>
        )
    }
}

export default withRouter(FeatureComponent)

