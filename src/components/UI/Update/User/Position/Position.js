import React, {Component} from 'react';
import classes from './Position.scss';
import {MdClose} from 'react-icons/lib/md';
import {IoAndroidAdd} from 'react-icons/lib/io';

class Position extends Component{

    _clickHandler = () =>{
        this.props.onClick(this.props.data.position_id);
    }

    render(){

        //change icon based on type
        let icon = <MdClose className={classes.icon} color={'#ffffff'}/>;
        if(this.props.type === "add"){
            icon = <IoAndroidAdd className={classes.icon} color={'#ffffff'}/>;
        }

        return(
            <div className={classes.container} onClick={this._clickHandler}>
                <div className={classes.title}>
                    {this.props.data.title}
                </div>
                
                <div className={classes.iconContainer}>
                    {icon}
                </div>
                
            </div>
        )

    }
}

export default Position;