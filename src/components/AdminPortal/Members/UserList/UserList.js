import React, {Component} from 'react';
import classes from '../UserList/UserList.scss';
import UserView from './UserView/UserView';



const userList = (props) => (
    <div className={classes.ListCSS}> 
    {
        props.userData.map( (user) =>
        {
            return <UserView data = {user}/>
        })
    }
    </div>
);

export default userList;