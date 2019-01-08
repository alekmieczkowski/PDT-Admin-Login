import React from 'react';
import classes from '../UserList/UserList.scss';
import UserView from './UserView/UserView';



const userList = (props) => {

    return (

        <div className={classes.ListCSS}>

            {
                //make sure data is not empty, otherwise shows no users view
                typeof props.userData !== "undefined" && props.userData.length > 0 ?
                    props.userData.map((user, index) => {
                        return <UserView
                            key={index}
                            data={user}
                            page={props.page}
                            active={props.active}
                            removed={props.removed}
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
    )

}

export default userList;