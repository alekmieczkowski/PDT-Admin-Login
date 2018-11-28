import React, {Component} from 'react';
import classes from './Options.scss';
import Button from '../../../UI/Button/Button';

const options = (props) =>{

    return(

        <div className={classes.containers}>
            <Button clicked={props.delete} buttonCSS={classes.button} iconSize={32} iconColor={'#003056' } type={"comment"}/>
            <Button clicked={props.submit} buttonCSS={classes.button} iconSize={32} iconColor={'#003056' } type={"edit"}/>
            <Button clicked={props.delete} buttonCSS={classes.button} iconSize={32} iconColor={'#003056' } type={"delete"}/>
        </div>
    );

};

export default options;