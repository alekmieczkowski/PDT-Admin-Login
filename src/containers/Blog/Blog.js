import React, { Component } from 'react';
import classes from './Blog.scss';
import BlogRender from '../../components/Blog/Blog';
import FakeData from './fakePosts';



class Blog extends Component {

    render() {
        return (
            <div className={classes.container}>
                <div className={classes.layout}>

                {/*Left Side Bar*/}
                <div className={classes.sidebar}>
                    THIS WILL BE THE SIDEBAR
                </div>

                {/*Center Blog view */}
                <div className={classes.blogView}>
                    <div className={classes.blogHeader}>
                        Recent Posts
                    </div>

                    <BlogRender data={FakeData.result.posts}/>
                </div>

                {/*Right Side Bar*/}
                <div className={classes.sidebar}>
                </div>

                </div>

            </div>
        );

    }

}




export default Blog;

