import React, {Component} from 'react';
import {MdClear} from 'react-icons/lib/md';
import classes from './Positions.scss';
import {deletePosition, getPositions} from '../../../../../services/AdminService';

class Position extends Component{


    _deletePosition = () =>{
        deletePosition(this.props.id);
        getPositions();
    }

    render(){
        return(
            <div className={classes.container}>
                <div className={classes.textContainer}>
                    {this.props.text}
                </div>
                <div className={classes.iconContainer} onClick={this._deletePosition}>
                    <MdClear size={30} color={'#003056'}/>
                </div>
            </div>
        )
    }
    

}

export default Position;