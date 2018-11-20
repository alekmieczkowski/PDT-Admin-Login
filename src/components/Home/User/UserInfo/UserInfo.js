import React from 'react';
import classes from './UserInfo.scss';
import Badge from '../../../UI/Badge/Badge';
import Button from '../../../UI/Button/Button';




const userinfo = (props) => {

    //convert phone numbers
    let phoneNum = props.data.phone.match(/(\d{3})(\d{3})(\d{4})/);
    phoneNum = "(" + phoneNum[1] + ") " + phoneNum[2] + "-" + phoneNum[3];


    return(
        <div className={classes.Container}>

            {/*Image Container*/}
            <div className={classes.ImgContainer}>
                <div className={classes.ImgWrapper}>
                    <img src={props.data.profile_img} alt="profile"/>
                </div>
            </div>

            {/*Data Container*/}
            <div className={classes.DataContainer}>

                {/*Name*/}
                <h2 className={classes.Name}>{props.data.fname} {props.data.lname}</h2>

                {/*Badges*/}
                <div className={classes.Badges}>
                    <Badge>Webmaster</Badge><Badge>Admin</Badge>
                </div>

                {/*Email and phone*/}
                <div>
                    <Button type="email" iconColor={classes.Icon} buttonCSS={classes.ButtonCSS} textCSS={classes.ButtonTextCSS}>
                        {props.data.email}
                    </Button>
                    <Button type="phone" iconColor={classes.Icon} buttonCSS={classes.ButtonCSS} textCSS={classes.ButtonTextCSS}>
                        {phoneNum}
                    </Button>
                </div>
            </div>
        </div>
    );
   
};


export default userinfo;