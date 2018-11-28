import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import classes from "./Transition.scss";
import { connect } from 'react-redux';

class Transition extends Component {



    render() {


        console.log("Transition State: " + this.props.transition);
        return (
            <CSSTransition
                in={this.props.transition}
                timeout={850}
                classNames="transition"
                appear={true}
                //unmountOnExit

            >
                <div className={classes.transition}>
                    {this.props.children}
                </div>

            </CSSTransition>
        )
    }


}

//get page transition queues 
const mapStateToProps = state => {
    return {
        transition: state.transition.pageTransition
    };
};


export default connect(mapStateToProps)(Transition);