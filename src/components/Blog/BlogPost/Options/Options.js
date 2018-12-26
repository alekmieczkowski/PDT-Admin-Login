import React from 'react';
import classes from './Options.scss';
import Button from '../../../UI/Button/Button';
import LikeButton from '../../../UI/Button/LikeButton/LikeButton';
import CommentButton from '../../../UI/Button/CommentButton/CommentButton';
import Wrapper from "../../../../hoc/Wrapper/Wrapper";

const options = (props) => {

    return (

        <div className={classes.container}>
            <LikeButton css={classes.button} clicked={props.updateLike} likedByUser={props.likedByUser} likes={props.likes} iconSize={26} iconColor={'#003056'} />
            <CommentButton css={classes.button} comments={props.comments} iconSize={26} iconColor={'#003056'} />

            {/*If admin, show edit options*/}
            {props.admin === true ?
                <Wrapper>
                    <div className={classes.divider} />
                    <Button clicked={props.edit} buttonCSS={classes.button} iconSize={26} iconColor={'#003056'} type={"edit"}>Edit</Button>
                    <Button clicked={props.delete} buttonCSS={classes.button} iconSize={26} iconColor={'#003056'} type={"delete"}>Delete</Button>
                </Wrapper>
                : null}




        </div>
    );

};

export default options;