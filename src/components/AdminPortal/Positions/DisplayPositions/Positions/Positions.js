import React from 'react';
import {MdClear} from 'react-icons/lib/md';
import classes from './Positions.scss';
const position = (props)=>{

    return(
        <div className={classes.container}>
            <div className={classes.textContainer}>
                {props.text}
            </div>
            <div className={classes.iconContainer} onClick={props.onClick}>
                <MdClear size={30} color={'#003056'}/>
            </div>
        </div>
    )

}

export default position;