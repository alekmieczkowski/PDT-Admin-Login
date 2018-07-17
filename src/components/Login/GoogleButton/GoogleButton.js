import React from 'react';
import classes from './GoogleButton.css';
import GoogleLogo from '../../../assets/img/Login/google.png';

const googleButton = (props) => {
    
    return(
        <div className={classes.Button} onClick={props.clicked}>
            <img className={classes.Logo} src={GoogleLogo} alt="google-logo"/>
            <h3>Sign in with Google</h3>

        </div>
    );
        

};

export default googleButton;