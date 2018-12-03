import React, { Component } from 'react';
import classes from './Blog.scss';
import BlogRender from '../../components/Blog/Blog';
import Form from '../../hoc/Form/Form';


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
                    <Form css={classes.blogHeader}>
                        Recent Posts
                    </Form>

                    <BlogRender/>
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

