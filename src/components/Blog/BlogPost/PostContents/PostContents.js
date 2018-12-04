import React from 'react';
import classes from './PostContents.scss';

const postContents = (props) =>{

    return(
        <div className={classes.container}>
            <div className={classes.postContentsContainer}>
                {props.content}
            </div>
            <div className={classes.dateSubmittedContainer}>
                Submitted: {props.submitted.substring(0, 10).split("-").join("/")}
            </div>
        </div>
    );
}
export default postContents;