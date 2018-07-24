import React, {Component} from 'react';
import Background from '../../components/Background/Background';
import classes from './Layout.css';
import Aux from '../Wrapper/Wrapper';
import Routing from '../../containers/Routing/Routing';


class Layout extends Component{


    render(){
        return(
            <Aux>
                <main className={classes.Layout}>
                    <Routing/>
                </main>
                <Background />
            </Aux>
        );
    }
}




export default  Layout;