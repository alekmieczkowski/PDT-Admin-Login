import React from 'react';
import Form from '../../hoc/Form/Form';
import Logo from '../Logo/Logo';
import GoogleButton from './GoogleButton/GoogleButton';
import classes from './Login.css';

const login = (props)=> {

        return(
                <Form minWidth={props.width}>
                    <Logo height="140px" color="#003054"/>
                    <hr className={classes.Divider}/>
                    <GoogleButton minWidth={props.width} clicked={props.signIn}/>
                </Form>
        );

}

export default login;