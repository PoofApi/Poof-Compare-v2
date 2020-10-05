import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWatch, removeFromWatch2, watch, logOutUser, addItemToWatch2, removeFromUserWatch, watchUser, resetEntireWatch, compare } from '../actions/product';
import '../App.css';


class CompareTableRoute extends Component {
    constructor(props){
        super(props);


    }


    render() {

        let comparedItemsRoute = this.props.comparedItems
        console.log("Compared items in redux state: ", comparedItemsRoute)

        return (
            
            comparedItemsRoute ? 
            
                <div>
                    <Link to={'/'}><i className="material-icons" style={{color: "black"}}>keyboard_return</i></Link>
                    <ol>
                        {comparedItemsRoute.map((item) => 
                            <li onClick={() => this.props.compare(item)}>
                                {item.title}
                            </li>
                        )}
                    </ol>
                </div>

                :

                <div>
                    <Link to={'/'}><i className="material-icons" style={{color: "black"}}>keyboard_return</i></Link>
                    <div className="">There are no compared items</div>
                </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.item.items,
        comparedItems: state.item.comparedItems,
        watchedItems: state.item.watchedItems,
        usersWatchedItems: state.item.usersWatchedItems,
        storeUserId: state.item.storeUserId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        watchUser: (item) => { dispatch(watchUser(item)) },
        removeFromUserWatch: (item) => { dispatch(removeFromUserWatch(item)) },
        removeFromWatch : (item) => { dispatch(removeFromWatch(item)) },
        removeFromWatch2 : (item) => { dispatch(removeFromWatch2(item)) },
        watch: (item) => { dispatch(watch(item)) },
        compare: (item) => { dispatch(compare(item)) },
        logOutUser: () => {dispatch(logOutUser())},
        addItemToWatch2: (item) => { dispatch(addItemToWatch2(item)) },
        resetEntireWatch: () => {dispatch(resetEntireWatch())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompareTableRoute);