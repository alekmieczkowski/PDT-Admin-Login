import React from 'react';
import classes from './Posts.scss';
import Manage from './Manage/Manage';
import Post from './Post/Post';


const posts = (props) => {



    return (
    <div className={classes.Container}>
        <div className={classes.Manage}>
            <Manage LikeCount={props.data.likes} CommentCount={props.data.comments} delete={props.delete}/>
        </div>
        <div className={classes.Post}>
            <Post data={props.data}/>
        </div>
    </div>
    );
   
};


export default posts;