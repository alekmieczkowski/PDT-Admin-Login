import React, {Component} from 'react';
import classes from './Positions.scss';
import { connect } from 'react-redux';
import DisplayPositions from '../../../components/AdminPortal/Positions/DisplayPositions/DisplayPositions';
import CreatePositions from '../../../components/AdminPortal/Positions/CreatePositions/CreatePositions';

class Positions extends Component{

    render(){


        return(
            <div className={classes.container}>
                <div className={classes.topContainer}>
                    <DisplayPositions/>
                </div>
                <div className={classes.bottomContainer}>
                    <CreatePositions/>
                </div>
            </div>
        );


    }
}

const mapStateToProps = state => {
    return {
        users: state.api.users,
    };
};

export default connect(mapStateToProps)(Positions);