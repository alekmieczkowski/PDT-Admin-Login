import React, {Component} from 'react';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import classes from './Layout.scss';
import Wrapper from '../Wrapper/Wrapper';
import LoadingSpinner from '../../components/UI/Spinner/Loading/Loading';
import ErrorSpinner from '../../components/UI/Spinner/Error/Error';
import {connect} from 'react-redux';
import ConfirmationSpinner from '../../components/UI/Spinner/Confirmation/Confirmation';

//hide error message
import {hideError} from '../../services/ErrorService';

//confirmation handling
import * as confirmationService from '../../services/ConfirmationService';

class Layout extends Component{
    

    _hideError = () =>{
        //call service to hide error
        console.log("dismiss error pressed");
        hideError();
    }

    render(){
        return(
            <Wrapper>
                <LoadingSpinner spinnerText={this.props.spinnerText} isActive={this.props.animateSpinner}/>
                <ErrorSpinner errorText={this.props.errorMessage} isActive={this.props.error} dismiss={hideError}/>
                <ConfirmationSpinner text={this.props.confirmationMessage} isActive={this.props.confirmation} type={this.props.confirmationType} data={this.props.confirmationData} dismiss={confirmationService.hideConfirmation}/>              
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
        spinnerText: state.spinner.spinnerText,
        animateSpinner: state.spinner.animateSpinner,
        errorMessage: state.error.message,
        error: state.error.toggleError,
        confirmationMessage: state.confirmation.message,
        confirmation: state.confirmation.toggleConfirmation,
        confirmationType: state.confirmation.type,
        confirmationData: state.confirmation.data
    };
};

export default connect(mapStateToProps)(Layout);