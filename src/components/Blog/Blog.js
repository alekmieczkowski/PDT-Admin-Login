import React from 'react';
import classes from './Blog.scss';
import BlogPost from './BlogPost/BlogPost';


const blog = (props) => {

    let posts = props.data.map((post) => {
        return <BlogPost key={post.post_id} data={post} />;
    })

    return (
        <div className={classes.container}>
            {posts}
        </div>

    );



}

export default blog;