import React, { Component } from 'react';
import Update from '../Update';
import classes from './Posts.scss';
import InputContainer from './InputContainer/InputContainer';
import Button from '../../Button/Button';
import { MdClose } from 'react-icons/lib/md';
import {showError} from '../../../../services/ErrorService';
import {showConfirmation} from '../../../../services/ConfirmationService';
import {isValidInput} from '../../../../services/InputValidationService';
import ImageUpload from './ImageUpload/ImageUpload';
import Placeholder from '../../../../assets/img/Default/img-placeholder.png';

import{SUBMIT_POST, UPDATE_POST} from '../../../../store/actions/api';
class Posts extends Component {

    state = {
        update: false,
        inputValue: "",
        image1: Placeholder,
        image2: Placeholder,
        image3: Placeholder,
    }

    componentDidMount(){

        //if update post set post data in state
        if(this.props.data !== null){
            this.setState({update: true, inputValue: this.props.data.content});
            
            if(this.props.data.images[0] !== null){
                this.setState({image1: process.env.REACT_APP_SERVER_IP + "" +this.props.data.images[0].location})
            }
            if(this.props.data.images[1] !== null){
                this.setState({image2: process.env.REACT_APP_SERVER_IP + "" +this.props.data.images[1].location})
            }
            if(this.props.data.images[2] !== null){
                this.setState({image3: process.env.REACT_APP_SERVER_IP + "" +this.props.data.images[2].location})
            }
        }

    }

    _updateInput = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    _dismiss =  () => {
        this.setState({ inputValue: "" });
        this.props.dismiss();
    }

    _submit =  async () =>{
        //if input is valid
        if(isValidInput(this.state.inputValue)){

            //create img array to pass
            let imgArr = [];
            if(this.state.image1 !== Placeholder){
                imgArr.push(this.state.image1);
            }
            if(this.state.image2 !== Placeholder){
                imgArr.push(this.state.image2);
            }
            if(this.state.image3 !== Placeholder){
                imgArr.push(this.state.image3);
            }

            //if this is an update
            if(this.state.update){
                //confirmation
                showConfirmation("Are you sure you wish to update this post?", UPDATE_POST, {...this.props.data, content: this.state.inputValue, images: imgArr, imagesOld: this.props.data.images});
            }
            else{
                //new post
                showConfirmation("Are you sure you wish to submit this post?", SUBMIT_POST, {content: this.state.inputValue, images: imgArr});
            }
            

        }
        else{
            showError("Please input valid post contents");
        }
        
    }

    _setImage = (key, image) =>{
        switch(key){
            case 1: this.setState({image1: image});
                    break;
            case 2: this.setState({image2: image});
                    break;
            case 3: this.setState({image3: image});
                    break;
            default: break;
        }
    }

    render() {
        return (
            <Update isActive={this.props.active}>
                <MdClose size={30} color={"#ffffff"} className={classes.iconClose} onClick={this._dismiss} />;
                    <div className={classes.container}>
                    <div className={classes.topContainer}>
                        <div className={classes.headerContainer}>
                            {this.props.title}
                        </div>
                        <div className={classes.inputContainer}>
                            <InputContainer value={this.state.inputValue} onChange={this._updateInput} />
                        </div>
                    </div>
                    <div className={classes.bottomContainer}>
                        <div className={classes.imagesContainer}>
                            <ImageUpload id={1} setImage={this._setImage} defaultImage={this.state.image1}/>
                            <ImageUpload id={2} setImage={this._setImage} defaultImage={this.state.image2}/>
                            <ImageUpload id={3} setImage={this._setImage} defaultImage={this.state.image3}/>
                        </div>
                        <div className={classes.submitContainer}>
                            <Button clicked={this._submit} buttonCSS={classes.button} textCSS={classes.buttonText} iconSize={22} iconColor={'#003056'} type={"create"}>Submit</Button>
                            <Button clicked={this._dismiss} buttonCSS={classes.button} textCSS={classes.buttonText} iconSize={22} iconColor={'#003056'} type={"close"}>Close</Button>
                        </div>
                    </div>

                </div>
            </Update>

        );
    }
}

export default Posts;