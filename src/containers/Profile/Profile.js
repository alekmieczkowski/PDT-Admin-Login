import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from './Profile.scss';
import {editUser} from '../../services/UpdateService';

import User from '../../components/Profile/User/User';


class Profile extends Component {

    /*Edit user*/
    _editUser = () =>{
        editUser(this.props.user);
    }

    render(){

        return(
            <div className={classes.container}>
                <User data={this.props.user} edit={this._editUser}/>
                <div className={classes.placeholder}>More Coming Soon!</div>
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


