import React from 'react';
import classes from './Form.scss';


const form = (props) => {

    const formCSS = [classes.FormFrame, props.css];

    return(
        <div className={formCSS.join(' ')}>
            {props.children}
        </div>
    );

};



export default form;