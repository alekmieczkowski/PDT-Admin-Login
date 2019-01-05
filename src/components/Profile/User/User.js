import React, {Component} from 'react';
import classes from './User.scss';
import Badge from '../../UI/Badge/Badge';
import {MdPhone, MdEmail} from 'react-icons/lib/md';
import Button from '../../UI/Button/Button';

class User extends Component{

    render(){

        // phone number conversion
        let phoneNum = this.props.data.phone_number.toString().match(/(\d{3})(\d{3})(\d{4})/);
        phoneNum = "(" + phoneNum[1] + ")" + phoneNum[2] + "-" + phoneNum[3];

        return(
            <div className={classes.container}>
                <div className={classes.imageContainer}>
                    <img src={this.props.data.google_picture} className={classes.image} alt={"user"}/>
                </div>
                <div className={classes.dataContainer}>
                    <div className={classes.infoContainer}>
                        <div className={classes.nameContainer}>
                            {this.props.data.first_name} {this.props.data.last_name}
                        </div>
                        <div className={classes.bondContainer}>
                            #{this.props.data.bond_number}
                        </div>
                    </div>
                    <div className={[classes.infoContainer, classes.positionContainer].join(' ')}>
                        {//add admin badge if admin
                            this.props.data.is_admin ?
                            <Badge>Admin</Badge>
                            : null        
                        }
                        {   //load position badges
                            this.props.data.positions.map((position) =>{
                                return <Badge key={position.position_id}>{position.title}</Badge>;
                            })

                        }
                    </div>
                    <div className={[classes.infoContainer, classes.emailContainer].join(' ')}>
                        <MdEmail size={26} style={'#003056'}/><span className={classes.iconText}>{this.props.data.email_address}</span>
                    </div>
                    <div className={[classes.infoContainer, classes.emailContainer].join(' ')}>
                        <MdPhone size={26} style={'#003056'}/><span className={classes.iconText}>{phoneNum}</span>
                    </div>
                    <div className={[classes.infoContainer, classes.optionsContainer].join(' ')}>
                        <Button type={'edit'}  textCSS={classes.buttonText} clicked={this.props.edit}>Edit Profile</Button>
                    </div>
                </div>
            </div>
        )

    }

}

export default User;