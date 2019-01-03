import React from 'react';
import Form from '../../hoc/Form/Form';
import Logo from '../Logo/Logo';
import classes from './Login.scss';

const login = (props) => {






        return (
                <Form css={classes.FormCSS}>
                        <div className={classes.FormContents}>
                                <Logo height="200px" color="#ffffff" />
                                {/*<h2 className={classes.AdminText}>Admin Portal</h2>*/}
                                <div className={classes.contents}>{props.children}</div>
                        </div>
                </Form>
        );



}




export default login;
