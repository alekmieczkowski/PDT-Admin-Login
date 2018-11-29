import React, {Component} from 'react';
import classes from './Options.scss';
import Button from '../../../UI/Button/Button';
import LikeButton from '../../../UI/Button/LikeButton/LikeButton';
import CommentButton from '../../../UI/Button/CommentButton/CommentButton';

const options = (props) =>{

    return(

        <div className={classes.container}>
            <div className={classes.buttonContainer}>
                <Button clicked={props.submit} buttonCSS={classes.button} iconSize={32} iconColor={'#003056' } type={"edit"}/>
                <Button clicked={props.delete} buttonCSS={classes.button} iconSize={32} iconColor={'#003056' } type={"delete"}/>
            </div>
            <div className={classes.buttonContainer}>
                <LikeButton css={classes.button} likes={12} iconSize={32} iconColor={'#003056' }/>
                <CommentButton css={classes.button} comments={20} iconSize={32} iconColor={'#003056' }/>
            </div>
            
            
            
        </div>
    );

};

export default options;