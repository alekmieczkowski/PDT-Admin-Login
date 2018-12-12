import React, { Component } from 'react';
import classes from './Spinner.scss';
import SpinnerIcon from '../../../assets/img/Spinner/spinner.gif';
import { CSSTransition } from 'react-transition-group';

export default class Spinner extends Component {





    render() {
        
        //block out background clicks if active
        let backgroundStyle = classes.background;
        if(this.props.isActive){
            backgroundStyle= [classes.background, classes.backgroundActive].join(' ');
        }

        return (
            <div className={backgroundStyle} onClick={this.props.clicked}>
            <CSSTransition
                in={this.props.isActive}
                timeout={800}
                classNames="spinner"
                appear={false}
                unmountOnExit
            >
            
                <div className={classes.container}>
                    {this.props.children}
                </div>
            
            
                
            </CSSTransition>
            </div>






        );
    }
}