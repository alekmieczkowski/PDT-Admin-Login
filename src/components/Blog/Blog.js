import React, {Component} from 'react';
import classes from './Blog.scss';
import BlogPost from './BlogPost/BlogPost';


const blog = (props) =>{



        return(
            <div className={classes.container}>
                <BlogPost/>
            </div>
            
        );

    

}

export default blog;