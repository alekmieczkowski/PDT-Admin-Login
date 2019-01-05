import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from './Profile.scss';
import User from '../../components/Profile/User/User';


class Profile extends Component {

    render(){

        return(
            <div className={classes.container}>
                <User data={this.props.user}/>
            </div>
        );

    }

}

const mapStateToProps = state => {
    return {
        user: state.api.user,
    };
};

export default connect(mapStateToProps)(Profile);


