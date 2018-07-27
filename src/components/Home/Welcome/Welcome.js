import React from 'react';
import classes from './Welcome.css';
import Form from "../../../hoc/Form/Form";

const welcome = (props) => (
    <Form minWidth="80%">
        <h1>{props.name}</h1>
    </Form>
   
);


export default welcome;