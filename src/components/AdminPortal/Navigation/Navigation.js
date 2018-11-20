import React, { Component } from 'react';
import classes from './Navigation.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';


class Navigation extends Component {


    render() {

        return (

            <div className={classes.Toolbar}>

                <div className={classes.DesktopOnly}>
                    <nav>
                        <NavigationItems url={this.props.url} />


                    </nav>
                </div>

            </div>

        );
    }
}



export default Navigation;