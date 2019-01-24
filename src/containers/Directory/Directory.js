import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from './Directory.scss';
import UserDirectory from '../../components/Directory/Directory';


class Directory extends Component {

    state={
        users: [],
        officers: [],
    }

    componentDidMount(){
        let usersArr = [];
        let officerArr = [];
        //sort users by officers or members
        this.props.users.map(user =>{

            
            if(user.positions.length > 0){
                //if user has at least 1 position
                officerArr.push(user);
            }
            else{
                //if user has no positions
                usersArr.push(user);
            }
            return null;
        });
        //save to state
        this.setState({users: usersArr, officers: officerArr});
    }

    render(){


        return(
            <div className={classes.container}>
                <div className={classes.sectionContainer}>
                    <div className={classes.header}>
                        Officers
                    </div>
                    <UserDirectory users={this.state.officers}/>
                </div>
                <div className={classes.sectionContainer}>
                    <div className={classes.header}>
                        Members
                    </div>
                    <UserDirectory users={this.state.users}/>
                </div>
            </div>
        );

    }

}


const mapStateToProps = state => {
    return {
        users: state.api.users.active,
    };
};

export default connect(mapStateToProps)(Directory);

