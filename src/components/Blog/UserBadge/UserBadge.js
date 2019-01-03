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
                {//add admin badge if admin
                    props.data.is_admin ?
                    <Badge>Admin</Badge>
                    : null        
                }
                {   //load position badges
                    props.data.positions.map((position) =>{
                        return <Badge key={position.position_id}>{position.title}</Badge>;
                    })

                }
            {props.data.is_admin ? <Badge>Admin</Badge>: null}
            </div>
            
            </div>
            
        </div>
    )

}

export default userbadge;