import React from 'react';
import classes from './Blog.scss';
import BlogPost from './BlogPost/BlogPost';


const blog = (props) => {

    let posts = typeof props.data !== "undefined"  && props.data !== null ? props.data.map((post) => {
        return <BlogPost key={post.post_id} data={post} userId={props.userId} admin={props.admin}/>;
    })
    : <div className={classes.header}>No Posts</div>;

    return (
        <div className={classes.container}>
            {posts}
        </div>

    );



}

export default blog;