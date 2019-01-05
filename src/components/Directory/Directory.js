import React from 'react';
import classes from './Directory.scss';
import DirUser from './DirUser/DirUser';

const directory = (props) =>{

    return(
        <div className={classes.container}>
            {
                //render out every user
                props.users.map(user =>{
                    return <DirUser user={user}/>
                })
            }
        </div>
    )

}
export default directory;