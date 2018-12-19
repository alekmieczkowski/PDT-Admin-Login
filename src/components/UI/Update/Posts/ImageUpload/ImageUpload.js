import React, { Component } from 'react';
import classes from './ImageUpload.scss';
import Placeholder from '../../../../../assets/img/Default/img-placeholder.png';

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: false,
            imgSource: null,
        }

        this._setImage = this._setImage.bind(this);

    }


    componentDidMount() {
        this.setState({ imgSource: Placeholder });
    }

    _setImage = async (event) => {
        console.log(this.props.id + ": " + event.target.files[0])
        //set image to state
        this.setState({ imgSource: URL.createObjectURL(event.target.files[0]) });
        this.props.setImage(this.props.id, event.target.files[0]);
    }


    render() {

        return (
            <div className={classes.container}>
                <input id={this.props.id} type={"file"} onChange={this._setImage} />
                <label htmlFor={this.props.id}>
                    <img className={classes.image} src={this.state.imgSource} alt={'upload'} />
                </label>
            </div>
        )

    }

}

export default ImageUpload;