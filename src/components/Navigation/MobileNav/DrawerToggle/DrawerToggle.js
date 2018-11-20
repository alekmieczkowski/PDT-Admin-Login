import React from 'react'
import classes from './DrawerToggle.scss';

const drawertoggle = (props) =>{

        let isClicked = [classes.hamburger, classes.hamburger3dx, classes.DrawerToggle];

        if(props.toggle){
            isClicked = [classes.hamburger, classes.hamburger3dx,  classes.DrawerToggle, classes.isActive]
        }

        

        return(
        <div className={isClicked.join(' ')} onClick={props.toggleHandler}>
            <div className={classes.hamburgerBox}>
                <div className={classes.hamburgerInner}></div>
            </div>
        </div>
        );
};

export default drawertoggle;