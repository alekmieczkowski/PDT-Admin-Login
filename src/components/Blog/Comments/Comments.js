import React, {Component} from 'react';
import classes from './Comments.scss';
import Comment from './Comment/Comment';
import {updateCommentLike, removeComment} from '../../../services/PostService';


class Comments extends Component {

    state={
        showComments: false
    }


    //check if post should update on data refresh
    shouldComponentUpdate(nextProps, nextState) {
        //check if post data is the same, and if you are not trying to open comments/settings
        if (this.props.data === nextProps.data && this.state.showComments === nextState.showComments) {
            return false;
        }
        return true;
    }

    //show comments
    _toggleComments = () =>{
        this.setState({showComments: !this.state.showComments});
    }


    //update comment likes with server
    _updateCommentLike = (commentId) =>{
        console.log("Calling comment like update");
        updateCommentLike(commentId);
    }

    //remove a comment
    _removeComment = async (id) =>{
        await removeComment(id);
    }


    render(){

        //render out comments
        let comments = this.props.data.map((comment) => {
            let admin = false;
            if(this.props.admin || comment.owner_id === this.props.userId){
                admin = true;
                
            }
            return <Comment key={comment.comment_id} admin={admin} data={comment} updateLike={this._updateCommentLike} delete={this._removeComment} update={this._editComment}/>;
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
