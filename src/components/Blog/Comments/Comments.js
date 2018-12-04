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

        //render out comments
        let comments = this.props.data.map((comment) => {
            return <Comment key={comment.comment_id} data={comment} />;
        });

        //save all comments - first one
        let allComments = null;
        if(comments.length > 1){
            allComments = comments;
            allComments = allComments.splice(1);
        }

        //change text on button
        let  commentText = "No Comments";
        
        if(allComments !== null){

            let grammar = "Comment";
            if(allComments.length > 1){
                grammar = "Comments";
            }
            commentText = this.state.showComments ?  "Hide " + allComments.length + " " + grammar : "Show " + allComments.length + " "+grammar;
            
        }

        return(
            <div className={classes.container}>
                {comments[0]}
                {this.state.showComments ? allComments : null}
                <div className={classes.showComments} onClick={this._toggleComments}> {commentText}</div>               
            </div>

        );

    }
}

export default Comments;
