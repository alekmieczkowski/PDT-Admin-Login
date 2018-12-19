import React from 'react';
import Textarea from 'react-textarea-autosize';
import classes from './InputContainer.scss'

const inputContainer = (props)=>{


    return(
        <Textarea 
            className={classes.inputContainer} 
            value={props.value} 
            onChange={props.onChange}
            maxLength={250}

            />
    )


}

export default inputContainer;