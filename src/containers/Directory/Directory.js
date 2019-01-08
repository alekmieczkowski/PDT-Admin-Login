import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from './Directory.scss';
import UserDirectory from '../../components/Directory/Directory';


class Directory extends Component {

    render(){

        return(
            <div className={classes.container}>
                <div className={classes.header}>
                    Active Brothers
                </div>
                <UserDirectory users={this.props.users}/>
            </div>
        );

    }

}


const mapStateToProps = state => {
    return {
        users: state.api.users.active,
    };
};

export default connect(mapStateToProps)(Directory);

