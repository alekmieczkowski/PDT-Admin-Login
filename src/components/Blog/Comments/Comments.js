import React, {Component} from 'react';
import classes from './Comments.scss';
import Comment from './Comment/Comment';

class Comments extends Component {

    render(){

        return(
            <div className={classes.container}>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                
            </div>

        );

    }
}

export default Comments;
