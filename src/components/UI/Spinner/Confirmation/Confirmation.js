import React, { Component } from 'react';
import classes from './Confirmation.scss';
import Spinner from '../Spinner';
import Button from '../../../UI/Button/Button';
import { MdError } from 'react-icons/lib/md';

import { acceptConfirmation, declineConfirmation} from '../../../../services/ConfirmationService';

class Confirmation extends Component {

    _onAccept = ()=>{
        acceptConfirmation();
    }

    _onDecline = () =>{
        declineConfirmation();
    }

    render() {

        return (

            <Spinner isActive={this.props.isActive} clicked={null}>

                <div className={classes.textBox}>
                    <div className={classes.errorIcon}><MdError size={35} color={'#003056'} className={classes.icon} /></div>
                    <div className={classes.errorHeader}>Confirm</div>
                </div>
                <div className={classes.errorMessage}>
                    {this.props.text}
                </div>
                <div className={classes.buttonContainer}>
                    <Button clicked={this._onAccept} textCSS={classes.buttonText} buttonCSS={classes.buttonCSS}>Accept</Button>
                    <Button clicked={this._onDecline} textCSS={classes.buttonText} buttonCSS={classes.buttonCSS}>Dismiss</Button>
                </div>
                
            </Spinner>

        );
    }

}

export default Confirmation;