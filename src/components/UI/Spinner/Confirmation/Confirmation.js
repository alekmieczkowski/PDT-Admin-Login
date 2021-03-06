import React, { Component } from 'react';
import classes from './Confirmation.scss';
import Spinner from '../Spinner';
import Button from '../../../UI/Button/Button';
import { MdError } from 'react-icons/lib/md';
import { deletePost, addPost, updatePost } from '../../../../services/PostService';
import { DELETE_POST, SUBMIT_POST, UPDATE_POST } from '../../../../store/actions/api';

class Confirmation extends Component {

    _onAccept = ()=>{
        //console.log("Type: "+ this.props.type + " Data: "+this.props.data);
        let acceptButton = null;

        switch (this.props.type) {
            case DELETE_POST:
                acceptButton = deletePost;
                break;
            case SUBMIT_POST:
                acceptButton = addPost;
                break;
            case UPDATE_POST:
                acceptButton = updatePost;
                break;
            default:
                acceptButton = null;
                break;
        }

        if(this.props.data !== null)
            acceptButton(this.props.data);
        else
            acceptButton();
    }

    render() {

        return (

            <Spinner isActive={this.props.isActive} clicked={null}>

                <div className={classes.textBox}>
                    <div className={classes.errorIcon}><MdError size={35} color={'#003056'} className={classes.icon} /></div>
                    <div className={classes.errorHeader}>Confirm</div>
                </div>
                <div className={classes.errorMessage}>
                    {this.props.text}
                </div>
                <div className={classes.buttonContainer}>
                    <Button clicked={this._onAccept} textCSS={classes.buttonText} buttonCSS={classes.buttonCSS}>Accept</Button>
                    <Button clicked={this.props.dismiss} textCSS={classes.buttonText} buttonCSS={classes.buttonCSS}>Dismiss</Button>
                </div>
                
            </Spinner>

        );
    }

}

export default Confirmation;