import React, { Component } from 'react';
import classes from '../AdminFunc/AdminFunc.css';


const AdminFunc = (props) => {

    return (

        <div>

            <div className={classes.AdminButton}>ADMIN</div>

            <div className={classes.AdminButton}>DELETE</div>

            <div className={classes.AdminButton}>EDIT</div>

        </div>

    );
}

export default AdminFunc;