import React, {Component} from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from './DrawerToggle/DrawerToggle';
import Aux from '../../../hoc/Wrapper/Wrapper';
import classes from './MobileNav.css'


class MobileNav extends Component{

    state = {
        clicked: false
    }

    drawerToggleHandler = () =>{
        this.setState({clicked: !this.state.clicked});
    }
    render(){
        return (
            <Aux>
                <DrawerToggle toggle={this.state.clicked} toggleHandler={this.drawerToggleHandler}/>
            </Aux>

        );
    }
};

export default MobileNav;