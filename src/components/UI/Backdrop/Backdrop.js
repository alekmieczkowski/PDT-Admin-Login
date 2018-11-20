import React from 'react';
import classes from './Backdrop.scss';

const backdrop = (props) =>{


    return(
        <div className={classes.Background}>
            <div className={classes.Ocean}>
                <div className={classes.Wave}></div>
                <div className={classes.Wave}></div>
            </div>
        </div>
    );

}

export default backdrop;