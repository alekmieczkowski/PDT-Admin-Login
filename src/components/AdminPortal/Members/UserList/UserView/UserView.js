import React, { Component } from 'react';
import classes from './UserView.scss';
import Badge from '../../../../UI/Badge/Badge';
import Button from '../../../../UI/Button/Button';


const userView = (props) => {

    // converting phone numbers
    let phoneNum = props.data.phone_number.toString().match(/(\d{3})(\d{3})(\d{4})/);
    phoneNum = "(" + phoneNum[1] + ")" + phoneNum[2] + "-" + phoneNum[3];

    // check if user is admin

    const isAdmin = props.data.is_admin;
    let flag;

    if (isAdmin === 1) {
        flag = <Badge>Admin</Badge>
    }

    return (

        <div className={classes.DataContainer}>
        
            <div className={classes.ImgWrapper}><img src={props.data.google_picture} alt="profile" /></div>
            <div className={classes.Data}>
                <div className={classes.Data}>{props.data.first_name}</div>
                <div className={classes.Data}>{props.data.last_name}</div>
                {/*<div className={classes.Data}>{flag}</div>*/}
                <div className={classes.Data}>{props.data.email_address}</div>
                <div className={classes.Data}>{phoneNum}</div>
                <div className={classes.Data}>{props.data.bond_number}</div>
                <div className={classes.Data}>{props.data.user_id}</div>
            </div>
        </div>


    );

};

export default userView;

