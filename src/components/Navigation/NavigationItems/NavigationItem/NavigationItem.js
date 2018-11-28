import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './NavigationItem.scss';
import { withRouter } from 'react-router'
import * as transitionActions from '../../../../store/transition/actions-transition';

class navigationItem extends Component{


    /**
     * Handles transitions between screens
     * 
     * When a new screen is selected, a delay is set between transition to ensure the fade out animation for the screen. 
     */
    Delay = (e) => {
        e.preventDefault()
        
        //qeueue fade out 
        this.props.stopTransition();

        //wait for fade out to finish
        setTimeout(() => {

            //push new page
            this.props.history.push(this.props.link);

            //queue fade in
            this.props.startTransition();
        },500)
    }
    

    render(){

        return(
            <li className={classes.NavigationItem}>
            <NavLink
                to={this.props.link}
                exact={this.props.exact}
                activeClassName={classes.active}
                onClick={this.Delay}
                >{this.props.children}</NavLink>
        </li>
        );
    }

}


//dispatch props to auth reducer
const mapDispatchToProps = dispatch => {
    return {
        stopTransition: () => dispatch({ type: transitionActions.TRANSITION_STOP }),
        startTransition: () => dispatch({ type: transitionActions.TRANSITION_START })
    }
};

export default withRouter(connect(null, mapDispatchToProps) (navigationItem));