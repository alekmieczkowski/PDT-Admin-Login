import React, { Component } from 'react';
import classes from './UserView.scss';
import Badge from '../../../../UI/Badge/Badge';
import Button from '../../../../UI/Button/Button';


const userView = (props) => {

    // phone number conversion
    let phoneNum = props.data.phone_number.toString().match(/(\d{3})(\d{3})(\d{4})/);
    phoneNum = "(" + phoneNum[1] + ")" + phoneNum[2] + "-" + phoneNum[3];

    return (

        <div className={classes.DataContainer}>

            <div className={classes.Data}>
                <div className={classes.Img}><img src={props.data.google_picture} alt="profile" /></div>

                {/*Badges*/}

                {/*}
                <div className={classes.dataStyling}><span className={classes.label}>Name:</span><br></br> {props.data.first_name} {props.data.last_name}</div>
                <div className={classes.dataStyling}><span className={classes.label}>Email:</span><br></br> {props.data.email_address}</div>
                <div className={classes.dataStyling}><span className={classes.label}>Phone:</span><br></br> {phoneNum}</div>
                <div className={classes.dataStyling}><span className={classes.label}>Bond #:</span><br></br>{props.data.bond_number}</div>
                */}

                <div className={classes.dataStyling}>
                    <div className={classes.data}>
                        {props.data.first_name} {props.data.last_name}
                    </div>
                    <div className={classes.data}>
                        {props.data.email_address}
                    </div>
                </div>

                <div className={classes.dataStyling}>
                    <div className={classes.data}>
                        {phoneNum}
                    </div>
                    <div className={classes.data}>
                        #{props.data.bond_number}
                    </div>
                </div>

                <div className={classes.Buttons}>
                    <div className={classes.buttonsTopRow}>
                        <Button clicked={props.delete} buttonCSS={classes.button} textCSS={classes.text} iconSize={26} iconColor={'#ffffff'} type={"admin"}>Make Admin</Button>

                        <Button clicked={props.delete} buttonCSS={classes.button} textCSS={classes.text} iconSize={26} iconColor={'#ffffff'} type={"inactive"}>Set Inactive</Button>
                        <Button clicked={props.delete} buttonCSS={classes.button} textCSS={classes.text} iconSize={26} iconColor={'#ffffff'} type={"alumni"}>Set Alumni</Button>
                    </div>
                    <div className={classes.buttonsBottomRow}>
                        <Button clicked={props.delete} buttonCSS={classes.button} textCSS={classes.text} iconSize={26} iconColor={'#ffffff'} type={"edit"}>Edit Info</Button>
                    </div>


                </div>

            </div>
        </div>


    );

};

export default userView;

