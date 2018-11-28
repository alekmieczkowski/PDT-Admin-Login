import React, { Component } from 'react';
import classes from './BlogPost.scss';
import Form from '../../../hoc/Form/Form';
import Options from './Options/Options';
import UserInfo from './UserInfo/UserInfo';


class BlogPost extends Component {




    render() {

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
                        </div>

                        {/*Post Images*/}
                        <div className={classes.postImageContainer}>
                        </div>

                    </div>
                    {/*Comments Contents */}
                    <div className={classes.commentContainer}>
                    </div>
                </Form>
                <div className={classes.optionContainer}>
                    <Options delete={null} submit={null}/>
                </div>
            </div>



        );

    }

}

export default BlogPost;