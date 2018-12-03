import React, { Component } from 'react';
import classes from './AddComment.scss';


class AddComment extends Component {
    
    state={
        comment: ""
    }

    _updateText = (event) =>{
        this.setState({comment: event.target.value});
    }


    render() {

        console.log("Text: " + this.state.comment);
        return (
            <div className={classes.container}>

                <div className={classes.inputContainer}>
                    <textarea value={this.state.comment} onChange={this._updateText} />
                </div>
                <div className={classes.submitContainer}>
                    {/*Submit Button*/}
                </div>

            </div>
        );

    }


}

export default AddComment;