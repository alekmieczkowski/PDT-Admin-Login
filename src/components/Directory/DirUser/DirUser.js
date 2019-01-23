import React, {Component} from 'react';
import classes from './DirUser.scss';
import Badge from '../../UI/Badge/Badge';
import {MdArrowDropUp, MdArrowDropDown, MdEmail, MdPhone} from 'react-icons/lib/md';
import Wrapper from '../../../hoc/Wrapper/Wrapper'
import {returnHighResGoogleImage} from '../../../services/ImageService';
class DirUser extends Component{

    state={
        showMore: false,
    }

    _toggleShowMore = () =>{
        this.setState({showMore: !this.state.showMore});
    }

    render(){

        // phone number conversion
        let phoneNum = this.props.user.phone_number.toString().match(/(\d{3})(\d{3})(\d{4})/);
        phoneNum = "(" + phoneNum[1] + ") " + phoneNum[2] + "-" + phoneNum[3];

        //check if user toggled click and change height of container
        let containerHeight = classes.standard;
        if(this.state.showMore){
            containerHeight = classes.toggled;
        }

        return(
            <div className={[classes.container, containerHeight].join(' ')}>

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
                <div className={[classes.dataContainer, classes.imageContainer].join(' ')}>
                    <img src={returnHighResGoogleImage(this.props.user.google_picture)} className={classes.image} alt={"user"}/>
                </div>

                {/*Name*/}
                <div className={[classes.dataContainer, classes.nameText].join(' ')}>
                    {this.props.user.first_name} {this.props.user.last_name}
                </div>

                {/*Bond*/}
                <div className={[classes.dataContainer, classes.bondText].join(' ')}>
                    #{this.props.user.bond_number}
                </div>

                {
                    //if show more is toggled, show other data
                    this.state.showMore ? 

                    <Wrapper>
                        {/*Email Address*/}
                        <div className={[classes.dataContainer, classes.moreData].join(' ')}>
                        <MdEmail size={26} style={{color: '#003056'}}/><span className={classes.iconText}>{this.props.user.email_address}</span>
                        </div>

                        {/*Phone Number*/}
                        <div className={[classes.dataContainer, classes.moreData].join(' ')}>
                            <MdPhone size={26} style={{color: '#003056'}}/><span className={classes.iconText}>{phoneNum}</span>
                        </div>
                    </Wrapper>

                    : null
                }
                

                {/*TODO*/}
                {/*Phone and Email Container*/}
                {/*View More Button*/}
                <div className={classes.moreContainer} onClick={this._toggleShowMore}>
                    {this.state.showMore ? <MdArrowDropUp size={40}  color={'#ffffff'}/> : <MdArrowDropDown size={40}  color={'#ffffff'}/>}
                </div>

            </div>
        );

    }

}

export default DirUser;