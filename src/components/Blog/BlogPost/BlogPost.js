import React, { Component } from 'react';
import classes from './BlogPost.scss';
import Form from '../../../hoc/Form/Form';
import Options from './Options/Options';
import UserInfo from './UserInfo/UserInfo';
import PostContents from './PostContents/PostContents';
import Comments from '../Comments/Comments';
import AddComment from './AddComment/AddComment';
import {connect} from 'react-redux';


//Post Services
import * as postService from '../../../services/PostService';

//update service
import {editPost} from '../../../services/UpdateService';
//confirmation activation
import * as confirmationService from '../../../services/ConfirmationService';

import {DELETE_POST} from '../../../store/actions/api';


class BlogPost extends Component {

    //check if post should update on data refresh
    shouldComponentUpdate(nextProps, nextState) {
        //check if post data is the same
        if (this.props.data === nextProps.data) {
            return false;
        }
        return true;
    }

    _updateLike =  () =>{
        postService.updatePostLike(this.props.data.post_id);
    }

    _removePost = async () =>{

        //ask for confirmation
        await confirmationService.showConfirmation("Are you sure you wish to delete this post?", DELETE_POST, this.props.data.post_id);

    }

    _updatePost = async ()=>{
        editPost(this.props.data);
    }


    render() {


        //image container handling
        let images = null;

        /*
        if(this.props.data.images.length > 0 && this.props.data.images.length !== null || undefined){
            images = <div className={classes.postImageContainer}></div>;
        }
        */

        //check if user has admin privelages for post
        let admin = false;
        //console.log("userId: " + this.props.userId + " admin: " + this.props.admin + " ownerId: " + this.props.data.owner_id);

        if(this.props.userId === this.props.data.owner_id || this.props.admin == true){
            //console.log("setting admin to true");
            admin = true;
        }

        return (

            <div className={classes.container}>
                <div className={classes.postContainer}>
                    <Form customCSS={true} css={classes.FormCSS}>
                        {/*Post Contents */}
                        <div className={classes.userPostContainer}>
                            {/*User Information */}
                            <div className={classes.userInformationContainer}>
                                <UserInfo data={this.props.data.user}/>
                            </div>

                            {/*User Post */}
                            <div className={classes.postContentContainer}>
                                
                                <PostContents content={this.props.data.content} submitted={this.props.data.created_at}/>
                                
                            </div>
                            {/*Post Images*/}
                            {images}

                            {/*Comments */}
                            <AddComment postId={this.props.data.post_id}/>
                            <Comments data={this.props.data.comments} userId={this.props.userId} admin={this.props.admin}/>

                        </div>

                    </Form>
                    {/*Comments Contents */}
                    <div className={classes.rightContainer}>
                        {/*Buttons */}
                        <Options delete={this._removePost} edit={this._updatePost} admin={admin} updateLike={this._updateLike} likes={this.props.data.likes} likedByUser={this.props.data.isLikedByUser} comments={this.props.data.comments.length}/>
                        
                    </div>
                </div>

            </div>



        );

    }

}

function mapStateToProps(state) {
    return { allowDelete: state.confirmation.confirmationAccept }
  }

export default connect(mapStateToProps, null)(BlogPost);