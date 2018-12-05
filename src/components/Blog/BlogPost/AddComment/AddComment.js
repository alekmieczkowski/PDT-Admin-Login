import React, { Component } from 'react';
import classes from './AddComment.scss';
import Textarea from 'react-textarea-autosize';
import Button from '../../../UI/Button/Button';


class AddComment extends Component {
    
    state={
        comment: ""
    }

    _updateText = (event) =>{
        this.setState({comment: event.target.value});
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
                    <Button clicked={null} type="submit" buttonCSS={classes.sendButton} iconSize={30} textCSS={classes.buttonText} iconColor={"#003056"}>Send</Button>
                </div>

            </div>
        );

    }


}

export default AddComment;