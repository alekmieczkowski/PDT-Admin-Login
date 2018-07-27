import React from 'react';
import classes from './User.css';
import Form from "../../../hoc/Form/Form";
import UserInfo from './UserInfo/UserInfo';

const user = (props) => (
    <Form css={classes.FormCSS}>
        <UserInfo data={props.userData}/>
    </Form>
   
);


export default user;