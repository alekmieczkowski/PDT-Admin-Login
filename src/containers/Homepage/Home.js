import React, {Component} from 'react';
//import classes from './Home.css';

import Aux from '../../hoc/Wrapper/Wrapper';
import HomePage from '../../components/Home/Home';

class Home extends Component {

    componentDidUpdate(){
        console.log("Home did update");
    }
    render(){



        console.log("in home");
        return(
            <Aux>
                <HomePage/>
            </Aux>
        );

    }

}




export default Home;

