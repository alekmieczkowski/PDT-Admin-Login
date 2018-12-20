import React, { Component } from 'react';
import Update from '../Update';
import classes from './Posts.scss';
import InputContainer from './InputContainer/InputContainer';
import Button from '../../Button/Button';
import { MdClose } from 'react-icons/lib/md';
import { hideUpdate } from '../../../../services/UpdateService';
import ImageUpload from './ImageUpload/ImageUpload';
class Posts extends Component {

    state = {
        inputValue: "",
        image1: null,
        image2: null,
        image3: null,
    }

    _updateInput = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    _dismiss = async () => {
        this.setState({ inputValue: "" });
        hideUpdate();
    }

    _setImage = (key, image) =>{
        switch(key){
            case 1: this.setState({image1: image});
                    break;
            case 2: this.setState({image2: image});
                    break;
            case 3: this.setState({image3: image});
                    break;
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
                            <ImageUpload id={1} setImage={this._setImage}/>
                            <ImageUpload id={2} setImage={this._setImage}/>
                            <ImageUpload id={3} setImage={this._setImage}/>
                        </div>
                        <div className={classes.submitContainer}>
                            <Button clicked={null} buttonCSS={classes.button} textCSS={classes.buttonText} iconSize={22} iconColor={'#003056'} type={"create"}>Submit</Button>
                            <Button clicked={this._dismiss} buttonCSS={classes.button} textCSS={classes.buttonText} iconSize={22} iconColor={'#003056'} type={"close"}>Close</Button>
                        </div>
                    </div>

                </div>
            </Update>

        );
    }
}

export default Posts;