import React from 'react';
import classes from './Pending.scss';
import Wrapper from '../../../../../../../hoc/Wrapper/Wrapper';
import Button from '../../../../../../UI/Button/Button';

const pending = (props) =>{


    return(

            <div className={classes.buttonContainer}>
                <Button clicked={props.makeAdmin} buttonCSS={[classes.button, classes.accept].join(' ')} textCSS={classes.text} iconSize={26} iconColor={'#ffffff'} type={"admin"}>Accept</Button>
                <Button clicked={props.setInactive} buttonCSS={[classes.button, classes.deny].join(' ')} textCSS={classes.text} iconSize={26} iconColor={'#ffffff'} type={"inactive"}>Deny</Button>
            </div>

    )
}

export default pending;