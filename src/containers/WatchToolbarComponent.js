import React, {Component} from 'react';
import '../App.css';

class WatchToolbar extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="watchtool-container" onClick={() => this.props.toggleClick()}>
                <i className="material-icons toggle-watchtoolbar" onClick={() => this.props.toggleClick()} >expand_less</i>
                <div className="toggleTitle">My Poof! Watchlist</div>
                <div className="fillerToggle"></div>
            </div>
        )
    }
}

export default WatchToolbar;