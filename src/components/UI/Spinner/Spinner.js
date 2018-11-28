import React, { Component } from 'react';
import classes from './Spinner.scss';
import SpinnerIcon from '../../../assets/img/Spinner/spinner.gif';
import { CSSTransition } from 'react-transition-group';

export default class Spinner extends Component {





    render() {

        //console.log("Spinner: " + this.props.isActive);
        return (
            <CSSTransition
                in={this.props.isActive}
                timeout={800}
                classNames="spinner"
                appear={false}
                unmountOnExit
            >
                
                    <div className={classes.container}>
                        <div className={classes.textBox}>
                            {this.props.spinnerText}
                    </div>

                        <div className={classes.spinnerBox}>
                            <img src={SpinnerIcon} className={classes.spinnerIcon} alt={"Where'd the spinner go?..."}/>
                        </div>

                    </div>
            





            </CSSTransition>






        );
    }
}