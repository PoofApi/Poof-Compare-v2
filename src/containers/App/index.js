import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import '../../App.css';
import {Home, NotFound} from '../';
import WatchlistRoute from '../WatchlistRoute.js';
import AboutPageRoute from '../AboutPageRoute.js';
import CompareTableRoute from '../CompareTableRoute.js';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import ContactComponent from '../Contact/ContactComponent';
import FeatureComponent from '../Feature/FeatureComponent';
import TermsComponent from '../Terms/TermsComponent';
import PrivacyComponent from '../Privacy/PrivacyComponent';
import CookiesComponent from '../Cookies/CookiesComponent';


class App extends Component {

  render() {

    return (
        <div className="app" style={{height: "100vh"}}>
          <div className="container-fluid" style={{height: "100vh"}}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/watchlist" component={WatchlistRoute} />
              <Route exact path="/compare-table" component={CompareTableRoute} />
              <Route exact path="/aboutPoof" component={AboutPageRoute} />
              <Route exact path="/contactPoof" component={ContactComponent} />
              <Route exact path="/featuresPoof" component={FeatureComponent} />
              <Route exact path="/poof-terms-and-conditions" component={TermsComponent} />
              <Route exact path="/poof-privacy-policy" component={PrivacyComponent} />
              <Route exact path="/poof-cookies-policy" component={CookiesComponent} />
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
    )
  }
}

export default App
