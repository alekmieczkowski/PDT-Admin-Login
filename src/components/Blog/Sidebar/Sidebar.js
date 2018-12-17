import React from 'react';
import classes from './Sidebar.scss';
import Options from './Options/Options';

const sidebar = (props) =>{
    
    return(
        <div className={classes.container}>
            <Options/>
        </div>
    )

}

export default sidebar;