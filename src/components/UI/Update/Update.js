import React, { Component } from 'react';
import classes from './Update.scss';
import { CSSTransition } from 'react-transition-group';

export default class Update extends Component {


    state={
        active: false,
    }

    componentDidMount(){
        setTimeout(
            function() {
                this.setState({active: this.props.isActive});
            }
            .bind(this),
            1
        );
    }

    /*
    shouldComponentUpdate(nextProps, nextState){
        console.log("In should component Update /n next Props: " + nextProps.isActive + " this state: " + this.state.active);
        if(nextProps.isActive !== this.state.active){
            return true;
        }
        return false;
    }
    
    */

    componentDidUpdate(prevProps, prevState){
        console.log("In Component Did Update");

        if(prevProps.isActive !== this.props.isActive)
            this.setState({active: this.props.isActive});
    }
    
    
    render() {
        //block out background clicks if active
        let backgroundStyle = classes.background;
        if(this.props.isActive){
            backgroundStyle= [classes.background, classes.backgroundActive].join(' ');
        }

        return (
            <div className={backgroundStyle} onClick={this.props.clicked}>
            <CSSTransition
                in={this.state.active}
                timeout={800}
                classNames="spinner"
                unmountOnExit={true}
            >
            
                <div className={classes.container}>
                    {this.props.children}
                </div>
            
            
                
            </CSSTransition>
            </div>






        );
    }
}