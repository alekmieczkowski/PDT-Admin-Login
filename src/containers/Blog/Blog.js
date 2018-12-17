import React, { Component } from 'react';
import classes from './Blog.scss';
import BlogRender from '../../components/Blog/Blog';
import {connect} from 'react-redux';
import UserBadge from '../../components/Blog/UserBadge/UserBadge';
import SideBar from '../../components/Blog/Sidebar/Sidebar';





class Blog extends Component {

    render() {
        return (
            <div className={classes.container}>
                <div className={classes.layout}>

                {/*Left Side Bar*/}
                <div className={classes.sidebar}>
                    <UserBadge data={this.props.user}/>
                    <SideBar/>

                </div>

                {/*Center Blog view */}
                <div className={classes.blogView}>
                    <div className={classes.blogHeader}>
                        Recent Posts
                    </div>

                    {this.props.post !== null ? <BlogRender userId={this.props.userId} admin={this.props.admin} data={this.props.posts}/> : null}
                </div>

                {/*Right Side Bar*/}
                <div className={classes.sidebar}>
                </div>

                </div>

            </div>
        );

    }

}




const mapStateToProps = state => {
    return {
        posts: state.api.posts,
        user: state.api.user,
        userId: state.api.user.user_id,
        admin: state.api.user.is_admin,
    };
};

export default connect(mapStateToProps)(Blog);

