import React, {Component} from 'react';
import Wrapper from '../../../../../../../hoc/Wrapper/Wrapper';
import Button from '../../../../../../UI/Button/Button';
import classes from './Active.scss';
class Active extends Component {

    _onMakeAdmin = () =>{
        this.props.admin(this.props.id);
    }

    _onSetInactive = () =>{
        this.props.inactive(this.props.id);
    }

    _onSetAlumni =() =>{
        this.props.alumni(this.props.id);
    }

    _onEditInfo = () =>{
        this.props.edit(this.props.id);
    }

    render(){
        return (
            <Wrapper>
                <div className={classes.buttonsTopRow}>
                    <Button clicked={this.props.makeAdmin} buttonCSS={classes.button} textCSS={classes.text} iconSize={26} iconColor={'#ffffff'} type={"admin"}>Make Admin</Button>
    
                    <Button clicked={this.props.setInactive} buttonCSS={classes.button} textCSS={classes.text} iconSize={26} iconColor={'#ffffff'} type={"inactive"}>Set Inactive</Button>
                    <Button clicked={this.props.setAlumni} buttonCSS={classes.button} textCSS={classes.text} iconSize={26} iconColor={'#ffffff'} type={"alumni"}>Set Alumni</Button>
                </div>
                <div className={classes.buttonsBottomRow}>
                    <Button clicked={this.props.edit} buttonCSS={classes.button} textCSS={classes.text} iconSize={26} iconColor={'#ffffff'} type={"edit"}>Edit Info</Button>
                </div>
            </Wrapper>
    
        )
    }

}

export default Active;