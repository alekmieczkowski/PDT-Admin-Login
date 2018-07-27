import React from 'react';
import classes from './Welcome.css';
import Form from "../../../hoc/Form/Form";

const welcome = (props) => (
    <Form css={classes.FormCSS}>
        <h1 className={classes.WelcomeText}>Welcome, {props.name}!</h1>
    </Form>
   
);


export default welcome;