import React from 'react';
import classes from './PostContents.scss';
import Linkify from 'react-linkify';
const postContents = (props) =>{

    return(
        <div className={classes.container}>
            <Linkify  properties={{target: '_blank', style: {fontStyle: 'italic'}}}>
                <div className={classes.postContentsContainer}>
                    {props.content}
                </div>
            </Linkify>
            <div className={classes.dateSubmittedContainer}>
                Submitted: {props.submitted.substring(0, 10).split("-").join("/")}
            </div>
        </div>
    );
}
export default postContents;