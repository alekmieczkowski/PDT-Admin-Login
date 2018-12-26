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

//hide error message
import {hideError} from '../../services/ErrorService';

//confirmation handling
import * as confirmationService from '../../services/ConfirmationService';

//update service
import {hideUpdate} from '../../services/UpdateService';

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
                <UpdatePost active={this.props.updatePost} title={this.props.updateTitle} data={this.props.updateData} dismiss={hideUpdate}/> 
                <UpdateUser active={this.props.updateUser} data={this.props.updateData} dismiss={hideUpdate}/>   
                <main className={classes.Layout}>
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
        //Update post
        updatePost: state.update.activePost,
        updateUser: state.update.activeUser,
        updateTitle: state.update.title,
        updateData: state.update.data,
    };
};

export default connect(mapStateToProps)(Layout);