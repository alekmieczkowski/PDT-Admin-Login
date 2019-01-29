import React from 'react';
import classes from './Error.scss';
import Spinner from '../Spinner';
import Button from '../../../UI/Button/Button';
import {MdError} from 'react-icons/lib/md';

const error = (props) => {



    //console.log("Spinner: " + this.props.isActive);
    return (

        <Spinner isActive={props.isActive} clicked={props.dismiss}>
        
                <div className={classes.textBox}>
                    <div className={classes.errorIcon}><MdError size={35}  color={'#003056'} className={classes.icon}/></div>
                    <div className={classes.errorHeader}>{props.errorHeader}</div>
                </div>
                <div className={classes.errorMessage}>
                    {props.errorText}
                </div>
                <Button clicked={props.dismiss} textCSS={classes.buttonText} buttonCSS={classes.buttonCSS}>Dismiss</Button>
        </Spinner>

    );

}

export default error;