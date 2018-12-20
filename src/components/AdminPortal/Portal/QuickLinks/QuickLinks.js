import React from 'react';
import Quicklink from './QuickLink/QuickLink';
import classes from './QuickLinks.scss'

const quicklinks =(props) =>{

    return(
        <div className={classes.container}>
             <Quicklink exact={false} link={'/Admin/Members'} type={'group'}>Manage Members</Quicklink>
             <Quicklink exact={false} link={'/Admin/Positions'} type={'work'}>Manage Positions</Quicklink>
             <Quicklink exact={false} link={'/Admin/Members/Pending'} type={'work'}>Requests</Quicklink>  
        </div>
       
    )
}

export default quicklinks;