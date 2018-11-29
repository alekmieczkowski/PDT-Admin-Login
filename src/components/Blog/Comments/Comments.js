import React, {Component} from 'react';
import classes from './Comments.scss';
import Comment from './Comment/Comment';

class Comments extends Component {

    render(){

        return(
            <div className={classes.container}>
                <div className={classes.commentHeader}>Comments</div>


                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>

                <div className={classes.commentInput}>
                
                </div>
            </div>

        );

    }
}

export default Comments;
