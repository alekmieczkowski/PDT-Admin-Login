import React, { Component } from 'react';
import classes from './User.scss';
import Update from '../Update';
import Textarea from 'react-textarea-autosize';
import InputMask from 'react-input-mask';
import PositionView from './PositionView/PositionView';
import Button from '../../Button/Button';
import * as _ from 'lodash';
import Wrapper from '../../../../hoc/Wrapper/Wrapper'
import {updateSelf} from '../../../../services/UpdateService';
import {showLoading, hideLoading} from '../../../../services/LoadingService';
import {updateUser} from '../../../../services/AdminService';


class User extends Component {

    state = {
        fName:"",
        lName:"",
        phone:"",
        email:"",
        bond:"",
        userPositions: [],
        positions: [],
    }

    componentDidMount() {
        this.setState({
            fName: this.props.data.first_name,
            lName: this.props.data.last_name,
            phone: this.props.data.phone_number,
            email: this.props.data.email_address,
            bond:  this.props.data.bond_number,
           
        })

        //avoid mutating global and user positions
        let globalPositions = [...this.props.positions];
        let userPositions = [...this.props.data.positions];

        //remove duplicate positions from positions array
        userPositions.map(position=>{
            globalPositions =  this._removeById(globalPositions, position.position_id);
        });

        //save updated positions
        this.setState({
            userPositions: userPositions,
            positions: globalPositions,
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
                userPositions: this.props.data.positions,
                positions: this.props.positions,
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

    //add position to user
    _addPosition = (id)=>{

        //make copies of arrays to avoid mutating state
        let positionArr = [...this.state.positions];
        let userPositionArr = [...this.state.userPositions];

        //add to user positions array
        userPositionArr.push(this._getById([...positionArr], id));

        //remove position from global positions
        positionArr = this._removeById(positionArr, id);

        //set state
        this.setState({positions: positionArr, userPositions: userPositionArr});
        this.forceUpdate();
    }

    //remove position from user
    _removePosition = (id)=>{
        //make copies of arrays to avoid mutating state
        let positionArr = [...this.state.positions];
        let userPositionArr = [...this.state.userPositions];

        //add to user positions array
        positionArr.push(this._getById([...userPositionArr], id));

        //remove position from users positions
        userPositionArr = this._removeById(userPositionArr, id);

        //set state
        this.setState({positions: positionArr, userPositions: userPositionArr});
        this.forceUpdate();
    }

    _removeById = (array, id) =>{
        let final = _.remove(array, function(data) { return data.position_id !== id; });
        return final;
        
    }

    _getById = (array, id)=>{
        let final = _.remove(array, function(data) { return data.position_id === id; });
        return final[0];
    }

    _submit = async ()=>{
        showLoading("Updating User");
        
        //set up user obj
        let userObj={
            first_name:this.state.fName,
            last_name: this.state.lName,
            bond_number:this.state.bond,
            phone_number:this.state.phone,
            positions:[]
        }

        if(this.props.admin){
            //add positions
            let positionArr = [];
            this.state.userPositions.map(position =>{
                positionArr.push(position.position_id);
            })
            userObj.positions = positionArr;
            console.log("User Obj: " + JSON.stringify(userObj));
            await updateUser(this.props.data.user_id, userObj);
        }
        else{
            await updateSelf(userObj);
        }


    }
    

    render() {
        return (
            <Update isActive={this.props.active}>
            <div className={classes.container}>
            
           
                <div className={classes.userContainer}>
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
                                </div>
                                <div className={[classes.InputContainer, classes.nameContainer].join(' ')}>
                                    <div className={classes.label}>Bond Number</div>
                                    <Textarea className={[classes.textInput, classes.bond].join(' ')} maxRows={1} maxLength={4} value={this.state.bond.toString()} onChange={this._changeBond} />
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

                    {this.props.admin ? 
                    <Wrapper>
                        <div className={classes.positionContainer}>
                            <PositionView title={"Current Positions"} data={this.state.userPositions} onClick={this._removePosition}/>
                        </div>
                        <div className={classes.positionContainer}>
                            <PositionView title={"Add Positions"} data={this.state.positions} type={"add"} onClick={this._addPosition}/>
                        </div>
                    </Wrapper>
                    : null}
                </div>
                <div className={classes.submitContainer}>
                            <Button clicked={this.props.dismiss} buttonCSS={classes.button} textCSS={classes.buttonText} iconSize={22} iconColor={'#003056'} type={"close"}>Close</Button>
                            <Button clicked={this._submit} buttonCSS={[classes.button, classes.submit].join(' ')} textCSS={classes.buttonText} iconSize={22} iconColor={'#fff'} type={"create"}>Submit</Button>
                </div>
                </div>
            </Update>
        )

    }

}
export default User;