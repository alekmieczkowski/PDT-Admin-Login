import React, {Component} from 'react';
import classes from './Comments.scss';
import Comment from './Comment/Comment';

class Comments extends Component {

    state={
        showComments: false
    }


    _toggleComments = () =>{
        this.setState({showComments: !this.state.showComments});
    }

    render(){

        let comments = this.props.data.map((comment) => {
            return <Comment key={comment.comment_id} data={comment} />;
        });

        let allComments = null;
        if(comments.length > 1 && this.state.showComments){
            allComments = comments.splice(1);
        }


        return(
            <div className={classes.container}>
                {comments[0]}
                {allComments}
                <div className={classes.showComments} onClick={this._toggleComments}> { comments.length > 1 ? "Show " + (comments.length - 1) + " comments" : "No Comments"}</div>
                
            </div>

        );

    }
}

export default Comments;
