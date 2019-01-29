import React from 'react';
import classes from './UserView.scss';
import Badge from '../../../../UI/Badge/Badge';

import * as Page from '../../Toolbar/ToolbarPages';

import {standardizeBond} from '../../../../../services/DataServices';

//buttons
import Active from './Buttons/Active/Active';
import Alumni from './Buttons/Alumni/Alumni';
import Removed from './Buttons/Removed/Removed';

import Pending from './Buttons/Pending/Pending';



const userView = (props) => {

    // phone number conversion
    let phoneNum = props.data.phone_number.toString().match(/(\d{3})(\d{3})(\d{4})/);
    phoneNum = "(" + phoneNum[1] + ") " + phoneNum[2] + "-" + phoneNum[3];


    let buttons = null;

    //set button options
    switch (props.page) {
        case Page.ACTIVE:
            buttons = <Active id={props.data.user_id} setAlumni={props.alumni} setRemoved={props.removed} edit={props.edit} makeAdmin={props.admin} isAdmin={props.data.is_admin} />;
            break;
        case Page.ALUMNI:
            buttons = <Alumni id={props.data.user_id} setActive={props.active} setRemoved={props.removed} edit={props.edit} makeAdmin={props.admin} isAdmin={props.data.is_admin} />;
            break;
        case Page.REMOVED:
            buttons = <Removed id={props.data.user_id} setAlumni={props.alumni} setActive={props.active} edit={props.edit} makeAdmin={props.admin} isAdmin={props.data.is_admin} />;
            break;
        case Page.PENDING:
            buttons = <Pending id={props.data.request_id} accept={props.accept} deny={props.deny} />;
            break;
        default:
            buttons = <Active id={props.data.user_id} setAlumni={props.alumni} setInactive={props.inactive} edit={props.edit} makeAdmin={props.admin} />;
            break;
    }

    return (

        <div className={classes.DataContainer}>

            <div className={classes.Data}>
                <div className={classes.Img}><img src={props.data.google_picture} alt="profile" /></div>



                <div className={classes.dataStyling}>
                    <div className={classes.data}>
                        #{standardizeBond(props.data.bond_number)} {props.data.first_name} {props.data.last_name}
                    </div>
                    <div className={classes.data}>

                        {/*Badges*/}

                        {props.data.is_admin ?
                            <Badge>Admin</Badge>

                            : null}
                        {typeof props.data.positions !== "undefined" ?
                            props.data.positions.map(position => {
                                return <Badge key={position.position_id}>{position.title}</Badge>;
                            })
                            :
                            null}

                    </div>
                </div>

                <div className={classes.dataStyling}>
                    <div className={classes.data}>
                        {phoneNum}
                    </div>
                    <div className={classes.data}>
                        {props.data.email_address}
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

