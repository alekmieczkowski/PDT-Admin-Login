import React from 'react';
import classes from './Loading.scss';
import SpinnerIcon from '../../../../assets/img/Spinner/spinner.gif';
import Spinner from '../Spinner';

const loading = (props) => {



    //console.log("Spinner: " + this.props.isActive);
    return (

        <Spinner isActive={props.isActive}>
                <div className={classes.textBox}>
                    {props.spinnerText}
                </div>

                <div className={classes.spinnerBox}>
                    <img src={SpinnerIcon} className={classes.spinnerIcon} alt={"Where'd the spinner go?..."} />
                </div>

        </Spinner>

    );

}

export default loading;