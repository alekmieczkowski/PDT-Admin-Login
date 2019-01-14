import React, {Component} from 'react';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import classes from './Layout.scss';
import Wrapper from '../Wrapper/Wrapper';
import LoadingSpinner from '../../components/UI/Spinner/Loading/Loading';
import ErrorSpinner from '../../components/UI/Spinner/Error/Error';
import {connect} from 'react-redux';
import ConfirmationSpinner from '../../components/UI/Spinner/Confirmation/Confirmation';
import UpdatePost from '../../components/UI/Update/Posts/Posts';
import UpdateUser from '../../components/UI/Update/User/User';

//Routing
import {authHeader} from '../../services/AuthService';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

//hide error message
import {hideError} from '../../services/ErrorService';

//confirmation handling
import * as confirmationService from '../../services/ConfirmationService';

//update service
import {hideUpdateUser, hideUpdatePost} from '../../services/UpdateService';

class Layout extends Component{
    

    _hideError = () =>{
        //call service to hide error
        hideError();
    }

    render(){
        return(
            <Wrapper>
                <LoadingSpinner spinnerText={this.props.spinnerText} isActive={this.props.animateSpinner}/>
                <ErrorSpinner errorText={this.props.errorMessage} isActive={this.props.error} dismiss={hideError}/>
                <ConfirmationSpinner text={this.props.confirmationMessage} isActive={this.props.confirmation} type={this.props.confirmationType} data={this.props.confirmationData} dismiss={confirmationService.hideConfirmation}/>     
                {this.props.updatePost ? <UpdatePost active={this.props.visible} title={this.props.updateTitle} data={this.props.updateData} dismiss={hideUpdatePost}/> : null}
                {this.props.updateUser ? <UpdateUser active={this.props.visible} admin={this.props.admin} data={this.props.updateData} dismiss={hideUpdateUser} positions={this.props.positions}/> : null}
                <main className={classes.Layout}>
                    {authHeader() !== false ? <Toolbar admin={this.props.admin}/>: null}
                    {this.props.children}
                </main> 
                <Backdrop />
            </Wrapper>
        );
    }
}

//map auth state in reducer to local state
const mapStateToProps = state => {
    return {
        //loading spinner
        spinnerText: state.spinner.spinnerText,
        animateSpinner: state.spinner.animateSpinner,
        //error popup
        errorMessage: state.error.message,
        error: state.error.toggleError,
        //confirmation popup
        confirmationMessage: state.confirmation.message,
        confirmation: state.confirmation.toggleConfirmation,
        confirmationType: state.confirmation.type,
        confirmationData: state.confirmation.data,

        //make update visible
        visible: state.update.visible,
        //Update post
        updatePost: state.update.activePost,
        updateTitle: state.update.title,
        updateData: state.update.data,
        updateType: state.update.type,
        //updateUser
        updateUser: state.update.activeUser,
        positions: state.admin.positions,
        admin: state.auth.admin

    };
};

export default connect(mapStateToProps)(Layout);