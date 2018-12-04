import React, { Component } from 'react';
import classes from './BlogPost.scss';
import Form from '../../../hoc/Form/Form';
import Options from './Options/Options';
import UserInfo from './UserInfo/UserInfo';
import PostContents from './PostContents/PostContents';
import Comments from '../Comments/Comments';
import AddComment from './AddComment/AddComment';


class BlogPost extends Component {




    render() {


        //image container handling
        let images = null;

        /*
        if(this.props.data.images.length > 0 && this.props.data.images.length !== null || undefined){
            images = <div className={classes.postImageContainer}></div>;
        }
        */
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
                            <AddComment/>
                            <Comments data={this.props.data.comments}/>

                        </div>

                    </Form>
                    {/*Comments Contents */}
                    <div className={classes.rightContainer}>
                        {/*Buttons */}
                        <Options delete={null} submit={null} admin={true} likes={this.props.data.likes} comments={this.props.data.comments.length}/>
                        
                    </div>
                    {/*<div className={classes.optionContainer}></div>*/}
                </div>

            </div>



        );

    }

}

export default BlogPost;