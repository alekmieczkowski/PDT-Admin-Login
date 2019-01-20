import React, { Component } from 'react';
import classes from './Blog.scss';
import BlogRender from '../../components/Blog/Blog';
import {connect} from 'react-redux';
import UserBadge from '../../components/Blog/UserBadge/UserBadge';
import SideBar from '../../components/Blog/Sidebar/Sidebar';
import {editPost} from '../../services/UpdateService';
import Button from '../../components/UI/Button/Button';
import {getLatestPosts} from '../../services/PostService';






class Blog extends Component {

    state={
        getLatestPosts: false,
    }

    _createPost = () =>{
        editPost(null);
    }

    _getLatestPosts = async () =>{
        this.setState({getLatestPosts: true});
        //get latest posts
        await getLatestPosts();
        //return normal button
        setTimeout(
            function() {
                this.setState({getLatestPosts: false});
            }
            .bind(this),
            1000
        );
       

    }

    render() {
        return (
            <div className={classes.container}>
                <div className={classes.layout}>

                {/*Left Side Bar*/}
                <div className={classes.sidebar}>
                    <UserBadge data={this.props.user}/>
                    <SideBar updatePost={this._createPost}/>
                </div>

                {/*Center Blog view */}
                <div className={classes.blogView}>
                    <div className={classes.blogHeader}>
                        <div className={classes.blogHeaderButton}>
                        {this.state.getLatestPosts ? <Button clicked={null} buttonCSS={[classes.button, classes.loadingAlign].join(' ')} iconSize={22} iconColor={'#fff'} type={"loading-white"}/>:<Button clicked={this._getLatestPosts} buttonCSS={classes.button} iconSize={22} iconColor={'#fff'} type={"refresh"}/>}
                        </div>
                        <div className={classes.blogHeaderText}>
                            Recent Posts
                        </div>
                        <div className={classes.blogHeaderButton}>
                            
                        </div>
                        
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

