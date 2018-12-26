import React, { Component } from 'react';
import classes from './User.scss';
import Update from '../Update';
import Textarea from 'react-textarea-autosize';
import InputMask from 'react-input-mask';

class User extends Component {

    state = {
        fName:"",
        lName:"",
        phone:"",
        email:"",
        bond:"",
        positions: [],
    }

    componentDidMount() {
        this.setState({
            fName: this.props.data.first_name,
            lName: this.props.data.last_name,
            phone: this.props.data.phone_number,
            email: this.props.data.email_address,
            bond:  this.props.data.bond_number,
            positions: this.props.data.positions,
        })
    }

    componentDidUpdate(prevProps){
        if(this.props.data.user_id !== prevProps.data.user_id){
            this.setState({
                fName: this.props.data.first_name,
                lName: this.props.data.last_name,
                phone: this.props.data.phone_number,
                email: this.props.data.email_address,
                bond:  this.props.data.bond_number,
                positions: this.props.data.positions,
            })
        }
    }


    _changeFName =(event)=>{
        this.setState({fName: event.target.value});
    }

    _changeLName =(event)=>{
        this.setState({lName: event.target.value});
    }

    _changePhone =(event)=>{
        this.setState({phone: event.target.value});
    }

    _changeEmail =(event)=>{
        this.setState({email: event.target.value});
    }

    _changeBond =(event)=>{
        this.setState({bond: event.target.value});
    }

    

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
                                    <Textarea className={[classes.textInput, classes.name].join(' ')} maxRows={1} maxLength={10} value={this.state.fName} onChange={this._changeFName} />
                                </div>
                                <div className={[classes.InputContainer, classes.nameContainer].join(' ')}>
                                    <div className={classes.label}>Last Name</div>
                                    <Textarea className={[classes.textInput, classes.name].join(' ')} maxRows={1} maxLength={20} value={this.state.lName} onChange={this._changeLName} />
                                </div>
                            </div>

                            <div className={classes.inputNameContainer}>
                                <div className={[classes.InputContainer, classes.nameContainer].join(' ')}>
                                    <div className={classes.label}>Phone Number</div>
                                    <InputMask className={[classes.textInput, classes.phone].join(' ')} value={this.state.phone} onChange={this._changePhone} mask="(999) 999-9999"/>
                                    {/*<Textarea className={[classes.textInput, classes.phone].join(' ')} maxRows={1} maxLength={30} value={this.state.phone} onChange={this._changePhone} />*/}
                                </div>
                                <div className={[classes.InputContainer, classes.nameContainer].join(' ')}>
                                    <div className={classes.label}>Bond Number</div>
                                    <Textarea className={[classes.textInput, classes.bond].join(' ')} maxRows={1} maxLength={4} value={this.state.bond} onChange={this._changeBond} />
                                </div>
                            </div>
                            <div className={classes.inputNameContainer}>
                                <div className={classes.InputContainer}>
                                    <div className={classes.label}>Email Address</div>
                                    <Textarea className={classes.textInput} maxRows={1} maxLength={30} value={this.state.email} onChange={this._changeEmail} />
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