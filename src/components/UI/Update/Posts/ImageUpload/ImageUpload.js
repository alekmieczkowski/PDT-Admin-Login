import React, { Component } from 'react';
import classes from './ImageUpload.scss';

import { showError } from '../../../../../services/ErrorService';
import  {UPLOAD_PNG, UPLOAD_GIF, UPLOAD_JPEG} from '../../../../../store/actions/api';
import Placeholder from '../../../../../assets/img/Default/img-placeholder.png';
import {removeImage, getLatestPosts} from '../../../../../services/PostService';
import {MdClose} from 'react-icons/lib/md'; 


class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSource: null,
            image: false,
            newImage: false,
        }

        this._setImage = this._setImage.bind(this);

        this.FileReader = new FileReader();
        this.fileTypes = ['jpg', 'gif', 'png'];

    }

    

    componentDidMount() {

        if(this.props.defaultImage === null){
            this.setState({ image: false, imgSource: Placeholder });
        }
            
        else{
            this.setState({ image: true, imgSource:  this.props.defaultImage });
        }
            
    }
    _removeImage = async () =>{
        //remove image
        await removeImage(this.state.imgSource);

        //pass null to update post
        this.props.setImage(this.props.id, null);

        //set placeholder
        this.setState({image: false, newImage: false, imgSource: Placeholder});

        //refresh posts\
        getLatestPosts();
    }

    _setImage = async (event) => {

        //cover for if user decided not to upload file
        if(event.target.files[0]){

            let correctType = false;
            //check if blob is correct type
            switch(event.target.files[0].type){
                case UPLOAD_JPEG: correctType=true;  break;
                case UPLOAD_PNG: correctType=true;   break;
                case UPLOAD_GIF: correctType=true;   break;
                default: correctType=false;          break;
            }
            
            if(correctType){
                //set image to state for preview
                this.setState({ image: true, newImage: true, imgSource: URL.createObjectURL(event.target.files[0]) });

                //convert image to blob
                let data = {
                    blob: event.target.files[0],
                    type: event.target.files[0].type,
                }
                //send blob data to state of update component
                this.props.setImage(this.props.id, data);
            }
            else{
                //incorrect file type
                showError("Unsupported File Type. PNG, JPG, and GIF are supported.");
            }
        } 
    }


    render() {

        return (
            <div className={classes.container}>
                {this.state.imgSource === Placeholder ? <input id={this.props.id} type={"file"} onChange={this._setImage} /> : <div className={classes.deleteButton} onClick={this._removeImage}><MdClose size={26} color={"#003056"}/></div>}
                <label htmlFor={this.props.id}>
                    <img className={classes.image} src={this.state.newImage ? this.state.imgSource : this.state.image ? process.env.REACT_APP_SERVER_IP  +this.state.imgSource : this.state.imgSource} alt={'upload'} />
                </label>
            </div>
        )

    }

}

export default ImageUpload;