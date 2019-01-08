import React, {Component} from 'react';
import Wrapper from '../../../../../../../hoc/Wrapper/Wrapper';
import Button from '../../../../../../UI/Button/Button';
import classes from './Alumni.scss';
class Alumni extends Component {

    _onMakeAdmin = () =>{
        this.props.makeAdmin(this.props.id, this.props.isAdmin);
    }

    _onRemove = () =>{
        this.props.setRemoved(this.props.id);
    }

    _onSetActive =() =>{
        this.props.setActive(this.props.id);
    }

    _onEditInfo = () =>{
        console.log("Id of edit: " + this.props.id);
        this.props.edit(this.props.id);
    }

    render(){
        return (
            <Wrapper>
                <div className={classes.buttonsTopRow}>
                    <Button clicked={this._onMakeAdmin} buttonCSS={classes.button} textCSS={classes.text} iconSize={26} iconColor={'#ffffff'} type={"admin"}>Set Admin</Button>
    
                    <Button clicked={this._onRemove} buttonCSS={classes.button} textCSS={classes.text} iconSize={26} iconColor={'#ffffff'} type={"inactive"}>Remove</Button>
                    <Button clicked={this._onSetActive} buttonCSS={classes.button} textCSS={classes.text} iconSize={26} iconColor={'#ffffff'} type={"active"}>Set Active</Button>
                </div>
                <div className={classes.buttonsBottomRow}>
                    <Button clicked={this._onEditInfo} buttonCSS={classes.button} textCSS={classes.text} iconSize={26} iconColor={'#ffffff'} type={"edit"}>Edit Info</Button>
                </div>
            </Wrapper>
    
        )
    }

}

export default Alumni;