import React, {Component} from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Wrapper/Wrapper';
import classes from './MobileNav.css'


class MobileNav extends Component{

    

    


    render(){



        //add isActive on click
        let animateDropdown = [classes.MobileNav];
        let animateNav = [classes.NavItems];

        if(this.props.toggle){
            animateDropdown = [classes.MobileNav,classes.isActive].join(' ');
            animateNav = [classes.NavItems, classes.ToggleNav].join(' ');
        }

        return (
                <div className={animateDropdown}>
                    <div className={animateNav} onClick={this.props.toggleHandler}>
                        <NavigationItems/>
                    </div>
                </div>

        );
    }
};

export default MobileNav;