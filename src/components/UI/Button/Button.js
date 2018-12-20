import React from 'react';
import classes from './Button.scss';
import {MdWork, MdClose, MdExitToApp, MdPhone, MdEmail, MdClear, MdComment, MdSend, MdCreate, MdIndeterminateCheckBox, MdCheckCircle, MdSchool} from 'react-icons/lib/md';
import {IoTrashB} from 'react-icons/lib/io'
import { FaEdit, FaGroup } from "react-icons/lib/fa";
import FitText from '@kennethormandy/react-fittext'
import Loading from '../../../assets/img/Spinner/loading-blue.gif';

const button = (props) => {

    let type = "";



    //check icon size
    let iconSize = 20;
    if(props.iconSize){
        iconSize = props.iconSize;
    }
    
    switch(props.type){
        case "logout":
            type= <MdExitToApp size={iconSize}  color={props.iconColor}/>;
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
            type= <FaEdit size={iconSize} color={props.iconColor}/>;
            break;
        case "delete":
            type= <IoTrashB size={iconSize} color={props.iconColor}/>;
            break;
        case "submit":
            type= <MdSend size={iconSize} className={classes.icon} color={props.iconColor}/>;
            break;
        case "loading":
            type= <img height={iconSize} className={classes.loadingImg} src={Loading} alt={"Loading"}/>;
            break;
        case "create":
            type=<MdCreate size={iconSize} color={props.iconColor}/>;
            break;
        case "close":
            type=<MdClose size={iconSize} color={props.iconColor}/>;
            break;
        case "inactive":
            type=<MdIndeterminateCheckBox size={iconSize} color={props.iconColor}/>;
            break;
        case "admin":
            type=<MdCheckCircle size={iconSize} color={props.iconColor}/>;
            break;
        case "alumni":
            type=<MdSchool size={iconSize} color={props.iconColor}/>;
            break;
        case "group":
            type=<FaGroup size={iconSize} color={props.iconColor}/>;
            break;
        case "work":
            type=<MdWork size={iconSize} color={props.iconColor}/>;
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
            <FitText compressor={.5} minFontSize={12} >
            <div className={textCSS}>
                {props.children}
            </div>
                
            </FitText>
        )
    }

    return(
    <div className={buttonCSS} onClick={props.clicked}>
        {type}
        {textData}
    </div>
    );
};

export default button;