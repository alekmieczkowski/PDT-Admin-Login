import React from 'react';
import classes from './UserBadge.scss';
import Badge from '../../UI/Badge/Badge';


const userbadge = (props) =>{

    return(
        <div className={classes.container}>
            <div className={classes.imageContainer}>
                <img src={props.data.google_picture} className={classes.image} alt={"user"}/>
            </div>

            <div className={classes.dataContainer}>
            <div className={classes.textContainer}>
                {props.data.first_name} {props.data.last_name}
            </div>
            <div className={classes.badgeContainer}>
            {
                props.data.positions.map(position =>{
                    return <Badge>{position}</Badge>;
                })

            }
            {props.data.is_admin ? <Badge>Admin</Badge>: null}
            </div>
            
            </div>
            
        </div>
    )

}

export default userbadge;