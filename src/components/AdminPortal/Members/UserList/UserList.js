import React, {Component} from 'react';
import classes from '../UserList/UserList.scss';
import UserView from './UserView/UserView';
import userData from '../../../../users'




const userList = (props) => (
    <div className={classes.ListCSS}>
    
    {
        userData.result.users.map(function (testUsers)
        {
            return <UserView data = {testUsers}/>
        })
    }
    </div>
);

export default userList;