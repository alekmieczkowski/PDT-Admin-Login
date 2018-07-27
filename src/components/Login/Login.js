import React from 'react';
import Form from '../../hoc/Form/Form';
import Logo from '../Logo/Logo';
import GoogleButton from './GoogleButton/GoogleButton';
import classes from './Login.css';

const login = (props)=> {

        return(
                <Form css={classes.FormCSS}>
                        <div className={classes.FormContents}>
                                <Logo height="140px" color="#003054"/>
                                <h2 className={classes.AdminText}>Admin Portal</h2>
                                <hr className={classes.Divider}/>
                                <GoogleButton  clicked={props.signIn}/>
                        </div>
                </Form>
        );

}

export default login;