import React, {Component} from 'react';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import classes from './Layout.scss';
import Wrapper from '../Wrapper/Wrapper';
import Spinner from '../../components/UI/Spinner/Spinner';
import {connect} from 'react-redux';

class Layout extends Component{
    
    render(){
        return(
            <Wrapper>
                <Spinner spinnerText={this.props.spinnerText} isActive={this.props.animateSpinner}/>              
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
    };
};

export default connect(mapStateToProps)(Layout);