import React, { Component } from 'react';
import classes from './CreatePositions.scss';
import Textarea from 'react-textarea-autosize';
import Button from '../../../UI/Button/Button';
import {addPosition, getPositions} from '../../../../services/AdminService';
import {isValidInput} from '../../../../services/InputValidationService';
import {showError} from '../../../../services/ErrorService';

class CreatePositions extends Component {


    state ={
        input: ""
    }

    _handleInput = (event) =>{

        //if enter key is not pressed
        if(event.keyCode !== 13){
            this.setState({input: event.target.value});
        }
        
    }

    ignoreEnter = (e) =>{
        if(e.keyCode === 13) {
            e.preventDefault();
        }
    }

    _createPosition = () =>{

        if(isValidInput(this.state.input)){
            addPosition(this.state.input);
            getPositions();
            this.setState({input: ""});
            this.props.refresh();
        }
        else{
            showError("Please enter a valid Position Name");
        }
        
    }

    render() {
        return (
            <div className={classes.container}>
                <div className={classes.text}>
                    Create Position:
                </div>
                <Textarea
                        className={classes.textInput}
                        placeholder={"Enter Position Name"}
                        maxRows={1}
                        width={'400px'}
                        maxLength={18}
                        value={this.state.input}
                        onChange={this._handleInput}
                        onKeyDown={this.ignoreEnter}
                    />
                 <Button clicked={this._createPosition} buttonCSS={classes.button} textCSS={classes.buttonText} iconSize={22}>Submit</Button>
            </div>
        )

    }


}

export default CreatePositions;