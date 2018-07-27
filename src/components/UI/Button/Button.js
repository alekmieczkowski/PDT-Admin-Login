import React from 'react';
import classes from './Button.css';
import {MdExitToApp, MdPhone, MdEmail} from 'react-icons/lib/md';

const button = (props) => {

    let type = "";
    
    switch(props.type){
        case "logout":
            type= <MdExitToApp size={20} color={props.iconColor}/>;
            break;
        case "email":
            type= <MdEmail size={20} style={props.iconColor}/>;
            break;
        case "phone":
            type= <MdPhone size={20} color={props.iconColor}/>;
            break;
        default:
            type= null;
            break;

    }

    //check if button css coming in
    let buttonCSS = classes.Button;
    if(props.buttonCSS){
        buttonCSS = props.buttonCSS;
    } 

    //check if button text css coming in
    let textCSS = classes.text;
    if(props.textCSS){
        textCSS = props.textCSS;
    }


    return(
    <div className={buttonCSS} onClick={props.clicked}>
        <div className={classes.icon}>
            {type}
        </div>
        <div className={textCSS}>
            {props.children}
        </div>
        

    </div>
    );
};

export default button;