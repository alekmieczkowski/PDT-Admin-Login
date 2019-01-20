import React, {Component} from 'react';
import Wrapper from '../../../../../../../hoc/Wrapper/Wrapper';
import Button from '../../../../../../UI/Button/Button';
import classes from './Active.scss';
class Active extends Component {

    _onMakeAdmin = () =>{
        this.props.makeAdmin(this.props.id, this.props.isAdmin);
    }

    _onRemove = () =>{
        this.props.setRemoved(this.props.id);
    }

    _onSetAlumni =() =>{
        this.props.setAlumni(this.props.id);
    }

    _onEditInfo = () =>{
        console.log("Id of edit: " + this.props.id);
        this.props.edit(this.props.id);
    }

    render(){
        return (
            <Wrapper>
                <div className={classes.buttonsTopRow}>
                    <Button clicked={this._onMakeAdmin} buttonCSS={classes.button} textCSS={classes.text} iconSize={26} iconColor={'#ffffff'} type={"admin"}>
                        {this.props.isAdmin ? "Rem. Admin" : "Set Admin"}
                    </Button>
    
                    <Button clicked={this._onRemove} buttonCSS={classes.button} textCSS={classes.text} iconSize={26} iconColor={'#ffffff'} type={"inactive"}>Remove</Button>
                    <Button clicked={this._onSetAlumni} buttonCSS={classes.button} textCSS={classes.text} iconSize={26} iconColor={'#ffffff'} type={"alumni"}>Set Alumni</Button>
                </div>
                <div className={classes.buttonsBottomRow}>
                    <Button clicked={this._onEditInfo} buttonCSS={classes.button} textCSS={classes.text} iconSize={26} iconColor={'#ffffff'} type={"edit"}>Edit Info</Button>
                </div>
            </Wrapper>
    
        )
    }

}

export default Active;