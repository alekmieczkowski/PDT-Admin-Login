import React, { Component } from 'react';
import classes from './Update.scss';
import { CSSTransition } from 'react-transition-group';

export default class Update extends Component {

    componentDidMount(){
        setTimeout(
            function() {
                this.setState({active: this.props.isActive});
            }
            .bind(this),
            1
        );
    }

    state={
        active: false,
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