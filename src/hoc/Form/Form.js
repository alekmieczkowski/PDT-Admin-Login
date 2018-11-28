import React from 'react';
import classes from './Form.scss';


const form = (props) => {

    let formCSS = null;
    if(props.customCSS){
        formCSS = [props.css, ""];
    }
    else{
        formCSS = [classes.FormFrame, props.css];
    }

    return(
        <div className={formCSS.join(' ')}>
            {props.children}
        </div>
    );

};



export default form;