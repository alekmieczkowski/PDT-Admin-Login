import React, {Component} from 'react';
//import classes from './Home.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Aux from '../../hoc/Wrapper/Wrapper';
import { Switch } from 'react-router-dom';
import PrivateRoute from '../../services/Auth/PrivateRoute';
import HomePage from '../../components/Home/Home/Home';
import Members from '../../components/Home/Members/Members';


//get state from reducers
import {connect} from 'react-redux';

class Home extends Component {

    componentDidUpdate(){
        console.log("Home did update");
    }
    render(){



        console.log("Location: " + this.props.match.url);
        console.log("Members: "+ this.props.match.url+'/members');
        return(
            <Aux>
                <Toolbar url={this.props.match.url}/>
                <Switch>
                    <PrivateRoute path={this.props.match.url+'/'}  exact location={this.props.match.url} auth={this.props.auth} component={HomePage} />
                    <PrivateRoute path={this.props.match.url+'/members'}  exact location={this.props.match.url} auth={this.props.auth} component={Members} />
                </Switch>
            </Aux>
        );

    }

}

const mapStateToProps = state => {
    return {
        auth: state.authenticated
    };
};


export default connect(mapStateToProps)(Home);

