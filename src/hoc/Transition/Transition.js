import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import classes from "./Transition.scss";

class Transition extends Component {

    render() {
        return (
            <CSSTransition
                in={this.state.transition}
                timeout={800}
                classNames="transition"
                appear={true}
                unmountOnExit

            >
                <div className={classes.transition}>
                    {this.props.children}
                </div>

            </CSSTransition>
        )
    }


}

//map auth state in reducer to local state
const mapStateToProps = state => {
    //console.log("Mapping redux to state");
    return {
        transition: state.authenticated
    };
};

export default connect(mapStateToProps)(Transition);