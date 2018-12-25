import React, { Component } from 'react';
import classes from './UserView.scss';
import Badge from '../../../../UI/Badge/Badge';

import * as Page from '../../Toolbar/ToolbarPages';

//buttons
import Active from './Buttons/Active/Active';
import Pending from './Buttons/Pending/Pending';



const userView = (props) => {

    // phone number conversion
    let phoneNum = props.data.phone_number.toString().match(/(\d{3})(\d{3})(\d{4})/);
    phoneNum = "(" + phoneNum[1] + ")" + phoneNum[2] + "-" + phoneNum[3];


    let buttons = null;

    //set button options
    switch(props.page){
        case Page.ACTIVE:
            buttons =  <Active setAlumni={null} setInactive={null} edit={null} makeAdmin={null} />;
            break;
        case Page.PENDING:
            buttons = <Pending accept={null} deny={null}/>;
            break;
        default:
            buttons =  <Active setAlumni={null} setInactive={null} edit={null} makeAdmin={null} />;
            break;
    }

    return (

        <div className={classes.DataContainer}>

            <div className={classes.Data}>
                <div className={classes.Img}><img src={props.data.google_picture} alt="profile" /></div>

                {/*Badges*/}

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
                    {/*Buttons*/}   
                    {buttons}
                </div>

            </div>
        </div>


    );

};

export default userView;

