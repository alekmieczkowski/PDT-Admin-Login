import React, {Component} from 'react';
import Background from '../../components/Background/Background';
import classes from './Layout.css';
import Aux from '../Auxilary/Aux';

class Layout extends Component{

    state = {

    }

    render(){
        return(
            <Aux>
            <main className={classes.Layout}>
                {this.props.children}   
            </main>
            <Background />
            </Aux>
        );
    }
}

export default Layout;