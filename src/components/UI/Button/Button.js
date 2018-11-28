import React from 'react';
import classes from './Button.scss';
import {MdExitToApp, MdPhone, MdEmail, MdClear, MdComment, MdBorderColor} from 'react-icons/lib/md';

const button = (props) => {

    let type = "";

    //check icon size
    let iconSize = 20;
    if(props.iconSize){
        iconSize = props.iconSize;
    }
    
    switch(props.type){
        case "logout":
            type= <MdExitToApp size={iconSize} color={props.iconColor}/>;
            break;
        case "email":
            type= <MdEmail size={iconSize} style={props.iconColor}/>;
            break;
        case "phone":
            type= <MdPhone size={iconSize} color={props.iconColor}/>;
            break;
        case "clear":
            type= <MdClear size={iconSize} color={props.iconColor}/>;
            break;
        case "comment":
            type= <MdComment size={iconSize} color={props.iconColor}/>;
            break;
        case "edit":
            type= <MdBorderColor size={iconSize} color={props.iconColor}/>;
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

    //check if theres text
    let textData = props.children;
    if(textData){
        textData = (
            <div className={textCSS}>
                {props.children}
            </div>
        )
    }

    return(
    <div className={buttonCSS} onClick={props.clicked}>
        <div className={classes.icon}>
            {type}
        </div>
       {textData}

    </div>
    );
};

export default button;