import React, { Component } from 'react';
import classes from './AddComment.scss';
import Textarea from 'react-textarea-autosize';
import Button from '../../../UI/Button/Button';
import {isValidInput} from '../../../../services/InputValidationService';
import {addComment} from '../../../../services/PostService';
import {showError} from '../../../../services/ErrorService';

class AddComment extends Component {
    
    state={
        comment: "",
        submit: false,
    }

    _updateText = (event) =>{
        this.setState({comment: event.target.value});
    }

    _submitComment = async() =>{
        this.setState({submit: true});

        //check if comment has valid input
        if(isValidInput(this.state.comment)){
            //submit comment
            await addComment(this.props.postId, this.state.comment);
            
            //reset comment box
            this.setState({comment: ""});
        }
        else{
            
            //throw error
            showError("Invalid input. Comment must contain text");
        }


        this.setState({submit: false});
    }


    render() {
        return (
            <div className={classes.container}>

                <div className={classes.inputContainer}>
                    <Textarea className={classes.textInput} placeholder={"Enter Comment..."} maxLength={250} value={this.state.comment} onChange={this._updateText} />
                    <div className={classes.characterCounterContainer}>{this.state.comment.length}/250</div>
                </div>
                <div className={classes.submitContainer}>
                    {/*Submit Button*/}
                    {this.state.submit? <Button clicked={null} type="loading" buttonCSS={classes.sendButton} iconSize={30} textCSS={classes.buttonText} iconColor={"#003056"}>Send</Button> : <Button clicked={this._submitComment} type="submit" buttonCSS={classes.sendButton} iconSize={30} textCSS={classes.buttonText} iconColor={"#003056"}>Send</Button>} 
                </div>

            </div>
        );

    }


}

export default AddComment;