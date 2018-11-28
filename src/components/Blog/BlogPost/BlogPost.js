import React, { Component } from 'react';
import classes from './BlogPost.scss';
import Form from '../../../hoc/Form/Form';
import Options from './Options/Options';
import UserInfo from './UserInfo/UserInfo';
import PostContents from './PostContents/PostContents';


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
                <Form customCSS={true} css={classes.postContainer}>
                    {/*Post Contents */}
                    <div className={classes.userPostContainer}>
                        {/*User Information */}
                        <div className={classes.userInformationContainer}>
                            <UserInfo/>
                        </div>

                        {/*User Post */}
                        <div className={classes.postContentContainer}>
                            <PostContents/>
                        </div>
                        {/*Post Images*/}
                        {images}
                        
                        {/*Buttons */}
                        <Options delete={null} submit={null}/>

                    </div>
                    {/*Comments Contents */}
                    <div className={classes.commentContainer}>
                    </div>
                </Form>
                <div className={classes.optionContainer}>
                    
                </div>
            </div>



        );

    }

}

export default BlogPost;