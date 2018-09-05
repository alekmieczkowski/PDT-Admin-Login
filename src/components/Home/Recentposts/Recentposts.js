import React from 'react';
import classes from './Recentposts.css';
import Form from "../../../hoc/Form/Form";
import Posts from './Posts/Posts';
import Aux from '../../../hoc/Wrapper/Wrapper';

//temp stuff
import TempImg from '../../../assets/img/Homepage/placeholder-user.png';

const recentposts = (props) => {
    const fakeUser = {
        fname: 'Alek',
        lname: 'Mieczkowski',
        bond: 55,
        email: 'amieczko@uncc.edu',
        position: 'Webmaster',
        phone: '1234567890',
        profile_img: TempImg

    }

    const fakePost = {
        id: 1,
        User: fakeUser,
        likes: 20,
        comments: 69,
        post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }

    let PostArr = [fakePost, fakePost, fakePost, fakePost, fakePost];

    const renderPosts = PostArr.map((postData, index) =>{
        return (
            <Aux key={index}>
                <Posts data={postData} delete={props.delete}/>
                <hr className={classes.PostDivider}/>
            </Aux>
        );
    });

    return(
        <Form css={classes.FormCSS}>
            <h1 className={classes.Header}>Recent Posts</h1>
            <div className={classes.PostContainer}>
                {renderPosts}
            </div>

        </Form>
    );
   
};


export default recentposts;