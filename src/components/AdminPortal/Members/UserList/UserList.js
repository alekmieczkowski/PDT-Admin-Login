import React, {Component} from 'react';
import classes from '../UserList/UserList.scss';
import UserView from './UserView/UserView';



const userList = (props) => (
    <div className={classes.ListCSS}> 
    
    {
        props.userData.length > 0 ?
        props.userData.map( (user) =>
        {
            return <UserView 
                        data = {user} 
                        page={props.page}
                        active={props.active}
                        inactive={props.inactive}
                        alumni={props.alumni}
                        admin={props.admin}
                        edit={props.edit}
                        accept={props.accept}
                        deny={props.deny}
                    />
        })
        :
        <div className={classes.noData}>No Users</div>
    }
    </div>
);

export default userList;