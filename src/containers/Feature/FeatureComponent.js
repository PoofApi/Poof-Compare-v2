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
                    Poof! Features
                </h2>
                <div className="featureComponentBanner">

                </div>
            </div>
            <FooterComponentSearchPage />
        </div>
        )
    }
}

export default withRouter(FeatureComponent)

