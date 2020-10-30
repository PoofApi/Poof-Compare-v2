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
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
    )
  }
}

export default App
