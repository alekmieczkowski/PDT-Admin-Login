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

        //change css to innactive
        let commentStyle = [classes.showComments, classes.innactive].join(' ');
        
        let  commentText = "No More Comments";
        //change text on button
        if(comments.length  === 0){
            commentText = "No Comments";
        }
        
        //if there are more comments
        if(allComments !== null){

            commentStyle = [classes.showComments, classes.active].join(' ');
            let grammar = "Comment";
            if(allComments.length > 1){
                grammar = "Comments";
            }
            commentText = this.state.showComments ?  "Hide " + allComments.length + " " + grammar : "Show " + allComments.length + " "+grammar;
            
        }

        return(
            <div className={classes.container}>
                {comments.length !== 0 ? comments[0] : null}
                {this.state.showComments ? allComments : null}
                <div className={commentStyle} onClick={this._toggleComments}> {commentText}</div>               
            </div>

        );

    }
}

export default Comments;
