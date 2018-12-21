import React, {Component} from 'react';
import classes from './Positions.scss';
import { connect } from 'react-redux';
import DisplayPositions from '../../../components/AdminPortal/Positions/DisplayPositions/DisplayPositions';
import CreatePositions from '../../../components/AdminPortal/Positions/CreatePositions/CreatePositions';

class Positions extends Component{

    _refresh = () =>{
        console.log("Refresh Called")
        this.forceUpdate();
    }
    render(){


        return(
            <div className={classes.container}>
                <div className={classes.topContainer}>
                    <DisplayPositions data={this.props.positions}/>
                </div>
                <div className={classes.bottomContainer}>
                    <CreatePositions refresh={this._refresh}/>
                </div>
            </div>
        );


    }
}

const mapStateToProps = state => {
    return {
        positions: state.admin.positions,
    };
};

export default connect(mapStateToProps)(Positions);