import React, { Component } from 'react';
import classes from './Pending.scss';
import Button from '../../../../../../UI/Button/Button';

class Pending extends Component {


    _onAccept = () =>{
        this.props.accept(this.props.id);
    }

    _onDeny = () =>{
        this.props.deny(this.props.id);
    }

    render() {
        return (

            <div className={classes.buttonContainer}>
                <Button clicked={this._onAccept} buttonCSS={[classes.button, classes.accept].join(' ')} textCSS={classes.text} iconSize={26} iconColor={'#ffffff'} type={"admin"}>Accept</Button>
                <Button clicked={this._onDeny} buttonCSS={[classes.button, classes.deny].join(' ')} textCSS={classes.text} iconSize={26} iconColor={'#ffffff'} type={"inactive"}>Deny</Button>
            </div>

        )
    }

}

export default Pending;