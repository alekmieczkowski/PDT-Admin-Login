import React, {Component} from 'react';
import classes from './Signup.scss';
import Button from '../../UI/Button/Button';
import InputMask from 'react-input-mask';
import {showError} from '../../../services/ErrorService';
import {isValidPhoneNumber, isValidBondNumber} from '../../../services/InputValidationService';

class Signup extends Component{

    state={
        phone: "",
        bond: "",
    }

    _updatePhone = (event)=>{
        let newPhone = event.target.value.replace(/\D/g,'');
        this.setState({phone: newPhone});
    }

    _updateBond = (event)=>{
        let newBond = event.target.value.replace(/\D/g,'');
        this.setState({bond: newBond});
    }

    _submit = () =>{
        console.log("phone: " + this.state.phone + "  bond: " + this.state.bond);
        if(!isValidBondNumber(this.state.bond) || !isValidPhoneNumber(this.state.phone)){
            showError("Please input valid information");
        }
        else{
            console.log("Submitting");
            let phoneNum = Number(this.state.phone);
            let bondNum = Number(this.state.bond);
            this.props.submit(phoneNum, bondNum);
        }
        
    }

    render(){

        return(
            <div className={classes.container}>
                <div className={classes.headerContainer}>
                    Sign Up
                </div>
                <div className={classes.inputContainer}>

                    {/*Header*/}
                    <div className={classes.infoHeader}>
                        Please enter the following data to register
                    </div>

                    {/*Input Phone Number */}
                    <div className={classes.userInputContainer}>
                        <div className={classes.descriptionContainer}>
                            Phone Number: 
                        </div>
                        <div className={classes.textInputContainer}>
                            <InputMask
                            className={classes.textInput} 
                            placeholder={"(###) ###-####"} 
                            value={this.state.phone} 
                            onChange={this._updatePhone}
                            mask="(999) 999-9999"
                            maskChar="#"
                            />
                        </div>
                    </div>


                    {/*Input Bond */}
                    <div className={classes.userInputContainer}>
                        <div className={classes.descriptionContainer}>
                            Bond Number: 
                        </div>
                        <div className={classes.textInputContainer}>
                            <InputMask
                            className={classes.textInput} 
                            placeholder={"Enter Bond Number..."} 
                            value={this.state.bond} 
                            onChange={this._updateBond}
                            mask="#9999"
                            maskChar=" "
                            
                            />
                        </div>
                    </div>

                    {/*Submit Buttons*/}
                    <div className={classes.submitContainer}>
                        <Button clicked={this.props.dismiss} buttonCSS={classes.button} textCSS={classes.buttonText} iconSize={22} iconColor={'#fff'} type={"close"}>Cancel</Button>
                        <Button clicked={this._submit} buttonCSS={classes.button} textCSS={classes.buttonText} iconSize={22} iconColor={'#fff'} type={"create"}>Register</Button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Signup;