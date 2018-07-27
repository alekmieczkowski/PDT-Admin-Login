import React, {Component} from 'react';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import classes from './Layout.css';
import Aux from '../Wrapper/Wrapper';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component{


    render(){
        return(
            <Aux>
                <main className={classes.Layout}>
                    {this.props.children}
                </main> 
                <Backdrop />
            </Aux>
        );
    }
}


export default Layout;