import React from 'react';
import Logout from './Logout/Logout';
import classes from './Button.css';

const button = (props) => {

    let type = "";
    
    switch(props.type){
        case "logout":
            type= <Logout size={props.size} color={props.color}/>
            break;
        default:
            type= null;
            break;

    }

    return(
    <div className={[classes.Button, classes[props.btnType]].join(' ')} onClick={props.clicked}>
        <div className={classes.icon}>
            {type}
        </div>
        <div className={classes.text}>
            {props.children}
        </div>
        

    </div>
    );
};

export default button;