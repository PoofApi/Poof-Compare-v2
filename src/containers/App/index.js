import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import '../../App.css';
import {Home, NotFound} from '../';
import WatchlistRoute from '../WatchlistRoute.js';
import CompareTableRoute from '../CompareTableRoute.js';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import Div100vh from 'react-div-100vh';


class App extends Component {

  render() {

    return (
      <Div100vh>
        <div className="app" style={{height: "100vh"}}>
          <div className="container-fluid" style={{height: "100vh"}}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/watchlist" component={WatchlistRoute} />
              <Route exact path="/compare-table" component={CompareTableRoute} />
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
      </Div100vh>
    )
  }
}

export default App
