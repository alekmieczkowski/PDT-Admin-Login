import React, {Component} from 'react'
import classes from './Members.scss';
import {connect} from 'react-redux';
import UserList from '../../../components/AdminPortal/Members/UserList/UserList';


/**
 * 
 * Containers:
 * - handle importing data from api
 * - handle any refresh calls, update/pull/delete
 * - control lifecycle of page
 * - they write/read from state
 *  - propagate data down into child components
 * 
 * @param  props 
 */
class Members extends Component{


    render() {


        return (
                


                <div className={classes.Members}>
                    
                    <UserList userData={this.props.users} />


                </div>
              
           

        );


    }


}

const mapStateToProps = state => {
    return {
        users: state.api.users,
    };
};

export default connect(mapStateToProps)(Members);