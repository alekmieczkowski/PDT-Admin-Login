import React, { Component } from 'react';
import classes from './User.scss';
import Update from '../Update';
import Textarea from 'react-textarea-autosize';

class User extends Component {

    render() {
        console.log("data in user update: " + JSON.stringify(this.props.data));
        return (
            <Update isActive={this.props.active}>
                <div className={classes.container}>
                    <div className={classes.topContainer}>
                        <div className={classes.imageContainer}>
                            <img className={classes.profileImg} src={this.props.data.google_picture} alt={'usr_img'} />
                        </div>
                        <div className={classes.inputAreaContainer}>
                            <div className={classes.inputNameContainer}>
                                <div className={[classes.InputContainer, classes.nameContainer].join(' ')}>
                                    <div className={classes.label}>First Name</div>
                                    <Textarea className={[classes.textInput, classes.name].join(' ')} maxRows={1} maxLength={10} value={null} onChange={null} />
                                </div>
                                <div className={[classes.InputContainer, classes.nameContainer].join(' ')}>
                                    <div className={classes.label}>Last Name</div>
                                    <Textarea className={[classes.textInput, classes.name].join(' ')} maxRows={1} maxLength={20} value={null} onChange={null} />
                                </div>
                            </div>

                            <div className={classes.inputNameContainer}>
                                <div className={[classes.InputContainer, classes.nameContainer].join(' ')}>
                                    <div className={classes.label}>Phone Number</div>
                                    <Textarea className={[classes.textInput, classes.phone].join(' ')} maxRows={1} maxLength={30} value={null} onChange={null} />
                                </div>
                                <div className={[classes.InputContainer, classes.nameContainer].join(' ')}>
                                    <div className={classes.label}>Bond Number</div>
                                    <Textarea className={[classes.textInput, classes.bond].join(' ')} maxRows={1} maxLength={4} value={null} onChange={null} />
                                </div>
                            </div>
                            <div className={classes.inputNameContainer}>
                            <div className={classes.InputContainer}>
                                <div className={classes.label}>Email Address</div>
                                <Textarea className={classes.textInput} maxRows={1} maxLength={30} value={null} onChange={null} />
                            </div>
                            </div>
                            

                        </div>
                    </div>
                    <div className={classes.positionContainer}>
                    </div>
                    <div className={classes.positionContainer}>
                    </div>
                    <div onClick={this.props.dismiss}>Dismiss</div>
                </div>

            </Update>
        )

    }

}
export default User;