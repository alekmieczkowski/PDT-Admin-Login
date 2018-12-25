import React, {Component} from 'react';
import classes from './User.scss';
import Update from '../Update';

class User extends Component{

    render(){

        return(
            <Update isActive={this.props.active}>
                Stuff
                <div onClick={this.props.dismiss}>Dismiss</div>
            </Update>
        )

    }

}
export default User;