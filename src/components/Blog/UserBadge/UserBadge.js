import React from 'react';
import classes from './UserBadge.scss';
import Badge from '../../UI/Badge/Badge';


const userbadge = (props) =>{

    return(
        <div className={classes.container}>
            <div className={classes.imageContainer}>
                <img src={props.data.google_picture} className={classes.image}/>
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
            </div>
            
            </div>
            
        </div>
    )

}

export default userbadge;