import React, {Component} from 'react';
import classes from './Positions.scss';
import { connect } from 'react-redux';
class Positions extends Component{

    render(){


        return(
            <div>Positions</div>
        );


    }
}

const mapStateToProps = state => {
    return {
        users: state.api.users,
    };
};

export default connect(mapStateToProps)(Positions);