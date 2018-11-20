import React, {Component} from 'react';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import classes from './Layout.scss';
import Wrapper from '../Wrapper/Wrapper';
import Spinner from '../../components/UI/Spinner/Spinner';

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
//map auth state in reducer to local state


export default Layout;