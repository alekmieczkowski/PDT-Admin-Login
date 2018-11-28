import React, { Component } from 'react';
import classes from './Blog.scss';
import BlogRender from '../../components/Blog/Blog';


class Blog extends Component {

    render() {

        return (
            <div className={classes.container}>
                <div className={classes.layout}>
                    <div className={classes.sidebar}>
                        THIS WILL BE THE SIDEBAR
                </div>
                    <div className={classes.blogView}>
                        <BlogRender/>
                </div>

                </div>

            </div>
        );

    }

}




export default Blog;

