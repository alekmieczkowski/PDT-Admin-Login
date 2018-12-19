import React from 'react';
import Button from  '../../../UI/Button/Button';
import classes from "./Options.scss";


const options = (props) =>{

    return(
        <div className={classes.container}>
            <Button clicked={props.update} buttonCSS={classes.button} textCSS={classes.buttonText} iconSize={22} iconColor={'#003056'} type={"create"}>Create Post</Button>          
        </div>
    )

}

export default options;