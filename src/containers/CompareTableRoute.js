import React, { Component } from 'react';
import {connect} from 'react-redux';
import { removeFromWatch, removeFromWatch2, watch, logOutUser, addItemToWatch2, removeFromUserWatch, watchUser, resetEntireWatch } from '../actions/product';


class CompareTableRoute extends Component {
    constructor(props){
        super(props);


    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
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
        logOutUser: () => {dispatch(logOutUser())},
        addItemToWatch2: (item) => { dispatch(addItemToWatch2(item)) },
        resetEntireWatch: () => {dispatch(resetEntireWatch())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompareTableRoute);