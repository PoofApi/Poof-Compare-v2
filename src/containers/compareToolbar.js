import React, {Component} from 'react';
import '../App.css';

class CompareToolbar extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="compareToolbar" onClick={() => this.props.toggleToolbar()}>
                {/* <i className="material-icons toggleButton" onClick={() => this.props.toggleToolbar()} >expand_less</i> */}
                <div className="detailsTitle2">Poof! Compare</div>
                {/* <div className="detailsFiller2"></div> */}
            </div>
        );
    }
}

export default CompareToolbar;