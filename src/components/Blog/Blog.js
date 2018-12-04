import React, { Component } from 'react';
import classes from './Blog.scss';
import BlogPost from './BlogPost/BlogPost';


const blog = (props) => {

    let posts = props.data.map((post, index) => {
        console.log("Index of post: " + index + " Post Value: " + post.content);
        return <BlogPost data={post} />;
    })

    return (
        <div className={classes.container}>
            {posts}
        </div>

    );



}

export default blog;