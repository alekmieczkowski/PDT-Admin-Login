import React from 'react';
import Form from '../../hoc/Form/Form';
import Logo from '../Logo/Logo';
import classes from './Login.scss';

const login = (props) => {






        return (
                <Form css={classes.FormCSS}>
                        <div className={classes.FormContents}>
                                <Logo height="140px" width="400" color="#ffffff" />
                                <h2 className={classes.AdminText}>Admin Portal</h2>
                                {props.children}
                        </div>
                </Form>
        );



}




export default login;
