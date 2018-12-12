import React, {Component} from 'react';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import classes from './Layout.scss';
import Wrapper from '../Wrapper/Wrapper';
import LoadingSpinner from '../../components/UI/Spinner/Loading/Loading';
import ErrorSpinner from '../../components/UI/Spinner/Error/Error';
import {connect} from 'react-redux';

//hide error message
import {hideError} from '../../services/ErrorService';

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
                <ErrorSpinner errorText={this.props.errorMessage} isActive={this.props.error} dismiss={this._hideError}/>               
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
        error: state.error.toggleError
    };
};

export default connect(mapStateToProps)(Layout);