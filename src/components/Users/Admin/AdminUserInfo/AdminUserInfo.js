import React, { Component } from 'react';
import classes from './AdminUserInfo.css';
import Badge from '../../../UI/Badge/Badge';
import Button from '../../../UI/Button/Button';
import AdminFunc from '../AdminFunc/AdminFunc';



// Component holding user img and info. Integrated w/ admin functionality component

const AdminUserInfo = (props) => {

    //convert phone numbers
    let phoneNum = props.data.phone_number.toString().match(/(\d{3})(\d{3})(\d{4})/);
    phoneNum = "(" + phoneNum[1] + ") " + phoneNum[2] + "-" + phoneNum[3];

    // check if user is currently admin, if so display
    const isAdmin = props.data.is_admin;
    let flag;

    if (isAdmin == 1){
        flag = <Badge>Admin</Badge>;
    }
    


    return (
        <div className={classes.Container}>

            {/*Image Container*/}
            <div className={classes.ImgContainer}>
                <div className={classes.ImgWrapper}>
                    <img src={props.data.google_picture} alt="profile" />
                </div>
            </div>

            {/*Data Container*/}
            <div className={classes.DataContainer}>

                {/*Name*/}
                <h2 className={classes.Name}>{props.data.first_name} {props.data.last_name}</h2>

                {/*Badges*/}
              <div className={classes.Badges}>
                {flag}
                </div>
                

                {/*Email and phone*/}
                <div>
                    <Button type="email" iconColor={classes.Icon} buttonCSS={classes.ButtonCSS} textCSS={classes.ButtonTextCSS}>
                        {props.data.email_address}
                    </Button>
                    <Button type="phone" iconColor={classes.Icon} buttonCSS={classes.ButtonCSS} textCSS={classes.ButtonTextCSS}>
                        {phoneNum}
                    </Button>
                </div>

                <div className={classes.identification}><strong>Bond #:</strong> {props.data.bond_number} 
                </div>

                <div className={classes.identification}><strong>User ID:</strong> {props.data.user_id}
                </div>

                
            </div>

            <div className={classes.ButtonContainer}>
            <AdminFunc></AdminFunc>
            </div>
            
        </div>
    );

};


export default AdminUserInfo;
