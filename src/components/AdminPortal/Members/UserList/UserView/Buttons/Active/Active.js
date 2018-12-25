import React from 'react';
import Wrapper from '../../../../../../../hoc/Wrapper/Wrapper';
import Button from '../../../../../../UI/Button/Button';
import classes from './Active.scss';
const active = (props) => {


    return (
        <Wrapper>
            <div className={classes.buttonsTopRow}>
                <Button clicked={props.makeAdmin} buttonCSS={classes.button} textCSS={classes.text} iconSize={26} iconColor={'#ffffff'} type={"admin"}>Make Admin</Button>

                <Button clicked={props.setInactive} buttonCSS={classes.button} textCSS={classes.text} iconSize={26} iconColor={'#ffffff'} type={"inactive"}>Set Inactive</Button>
                <Button clicked={props.setAlumni} buttonCSS={classes.button} textCSS={classes.text} iconSize={26} iconColor={'#ffffff'} type={"alumni"}>Set Alumni</Button>
            </div>
            <div className={classes.buttonsBottomRow}>
                <Button clicked={props.edit} buttonCSS={classes.button} textCSS={classes.text} iconSize={26} iconColor={'#ffffff'} type={"edit"}>Edit Info</Button>
            </div>
        </Wrapper>

    )


}

export default active;