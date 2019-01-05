import React, {Component} from 'react';
import classes from './DirUser.scss';
import Badge from '../../UI/Badge/Badge';

class DirUser extends Component{

    render(){

        return(
            <div className={classes.container}>

                {
                    /*Badges*/
                    <div className={classes.badgeContainer}>
                    {   
                        //render out every user position
                        this.props.user.positions.map(position =>{
                            return <Badge invert={true} key={position.position_id}>{position.title}</Badge>;
                        })
                    }
                    </div>

                }

                {/*Profile Image*/}
                <div className={classes.dataContainer}>
                    <img src={this.props.user.google_picture} className={classes.image} alt={"user"}/>
                </div>

                {/*Name*/}
                <div className={[classes.dataContainer, classes.nameText].join(' ')}>
                    {this.props.user.first_name} {this.props.user.last_name}
                </div>

                {/*Bond*/}
                <div className={[classes.dataContainer, classes.bondText].join(' ')}>
                    #{this.props.user.bond_number}
                </div>

                

                {/*TODO*/}
                {/*Phone and Email Container*/}
                {/*View More Button*/}

            </div>
        );

    }

}

export default DirUser;