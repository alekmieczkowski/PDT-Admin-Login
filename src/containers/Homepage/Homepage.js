import React, {Component} from 'react';
import Home from '../../components/Home/Home';
import Welcome from '../../components/Home/Welcome/Welcome';
import classes from './Homepage.css';

class Homepage extends Component {

    componentDidUpdate(){
        console.log("Home did update");
    }
    render(){



        console.log("in home");
        return(
            <div className={classes.Homepage}>
                <Welcome name="User"/>
                <Home/>
            </div>
        );

    }

}




export default Homepage;

