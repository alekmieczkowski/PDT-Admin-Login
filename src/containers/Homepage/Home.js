import React, {Component} from 'react';
//import classes from './Home.css';

import Aux from '../../hoc/Wrapper/Wrapper';
import HomePage from '../../components/Home/Home';
import Layout from '../../hoc/Layout/Layout';
/*
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import { Switch } from 'react-router-dom';
import PrivateRoute from '../../services/Auth/PrivateRoute';

import Members from '../../components/Members/Members';
import Analytics from '../../components/Analytics/Analytics';
*/

//get state from reducers
import {connect} from 'react-redux';

class Home extends Component {

    componentDidUpdate(){
        console.log("Home did update");
    }
    render(){



        console.log("in home");
        return(
            <Aux>

                    <HomePage/>
                {/*
                <Toolbar url={this.props.match.url}/>
                <Switch>
                    <PrivateRoute path={'/home'}   exact location={this.props.match.url} auth={this.props.auth} component={HomePage} />
                    <PrivateRoute path={'/analytics'}   exact  location={this.props.match.url} auth={this.props.auth} component={Analytics} />
                    <PrivateRoute path={'/members'}   exact location={this.props.match.url} auth={this.props.auth} component={Members} />
                </Switch>
                */}
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

