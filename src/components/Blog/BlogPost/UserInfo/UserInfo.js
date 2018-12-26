import React from 'react';
import classes from './UserInfo.scss';
import Badge from '../../../UI/Badge/Badge';


const userInfo = (props) =>{

    return(
        <div className={classes.container}>
            
            {/*User Image */}
            <div className={classes.imageContainer}>
                <img src={props.data.google_picture} className={classes.profileImage} alt={"Profile"}/>
            </div>
            
            {/*User Information */}
            <div className={classes.userInfoContainer}>
                {/*User Name and Bond */}
                <div className={classes.userNameContainer}>
                    {props.data.full_name} <span className={classes.userBondText}>#{props.data.bond_number}</span>
                </div>

                {/*User Badges*/}
                <div className={classes.userBadgeContainer}>
                    {props.positions.length > 0 ? 
                    props.positions.map(position=>{
                        return <Badge key={position.position_id}>{position.title}</Badge>;
                    })
                    : null}
                </div>

            
            </div>
        </div>
    );

}

export default userInfo;