import React, { Component } from 'react';
import classes from '../Admin/Admin.css';
import Form from '../../../hoc/Form/Form';
import AdminUserInfo from '../Admin/AdminUserInfo/AdminUserInfo';
import userData from '../../../users.js';

// Serves as component for displaying current users and roles,
// retrieves information from DB in data structure (array, list?)
const Admin = (props) => (
    <div className={classes.ListCSS}>
      
        {
            userData.result.users.map(function (testUsers) {

                return <AdminUserInfo data ={testUsers}/>
            })
        }
    </div>

);




export default Admin;