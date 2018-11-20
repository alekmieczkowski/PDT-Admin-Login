import React, { Component } from 'react';
import classes from './Spinner.scss';
import Form from '../../../hoc/Form/Form';
import SpinnerIcon from '../../../assets/img/Spinner/spinner.gif';
import { CSSTransition } from 'react-transition-group';

export default class Spinner extends Component {





    render() {

        console.log("Spinner: " + this.props.isActive);
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
                            Placeholder Text
                    </div>

                        <div className={classes.spinnerBox}>
                            <img src={SpinnerIcon} className={classes.spinnerIcon} />
                        </div>

                    </div>
            





            </CSSTransition>






        );
    }
}