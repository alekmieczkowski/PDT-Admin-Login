import React from 'react';
import classes from './UserInfo.scss';
import Badge from '../../../UI/Badge/Badge';
import Placeholder from "../../../../assets/img/Homepage/placeholder-user.png";


const userInfo = (props) =>{

    return(
        <div className={classes.container}>
            
            {/*User Image */}
            <div className={classes.imageContainer}>
                <img src={Placeholder} className={classes.profileImage} alt={"Profile Image"}/>
            </div>
            
            {/*User Information */}
            <div className={classes.userInfoContainer}>
                {/*User Name and Bond */}
                <div className={classes.userNameContainer}>
                    Aleksander Mieczkowski <span className={classes.userBondText}>#55</span>
                </div>

                {/*User Badges*/}
                <div className={classes.userBadgeContainer}>
                    <Badge>Webmaster</Badge><Badge>Risk Management</Badge>
                </div>

            
            </div>
        </div>
    );

}

export default userInfo;