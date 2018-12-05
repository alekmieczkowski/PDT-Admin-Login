import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './NavigationItem.scss';
import { withRouter } from 'react-router'
import * as transitionActions from '../../../../store/actions/transition';

class navigationItem extends Component{


    state={
        navHighlight: false,
    }

    /**
     * Handles transitions between screens
     * 
     * When a new screen is selected, a delay is set between transition to ensure the fade out animation for the screen. 
     */
    Delay = (e) => {

        //check if the link youre going to is the page you are on 
        if(this.props.link === this.props.history.location.pathname){
            e.preventDefault();
        }
        else{
            this.setState({navHighlight: true});
            e.preventDefault()
        
            //qeueue fade out 
            this.props.stopTransition();

            
    
            //wait for fade out to finish
            setTimeout(() => {

                //get rid of active nav 
            this.setState({navHighlight: false});
                
    
                //push new page
                this.props.history.push(this.props.link);
    
                //queue fade in
                this.props.startTransition();

                
            },500)
        }
       
    }
    

    render(){

        let navColor = null;

        if(this.state.navHighlight){
            navColor = [classes.NavigationItem, classes.navActive].join(' ');

        }
        else{
            navColor = classes.NavigationItem;

        }

        return(
            <li className={navColor}>
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