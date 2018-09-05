import React, {Component} from 'react';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import classes from './Layout.css';
import Wrapper from '../Wrapper/Wrapper';


class Layout extends Component{

    render(){
        return(
            <Wrapper>
                <main className={classes.Layout}>
                    {this.props.children}
                </main> 
                <Backdrop />
            </Wrapper>
        );
    }
}


export default Layout;