import React, { Component } from 'react';
import classes from './ImageUpload.scss';
import Placeholder from '../../../../../assets/img/Default/img-placeholder.png';
import { showError } from '../../../../../services/ErrorService';
import  {UPLOAD_PNG, UPLOAD_GIF, UPLOAD_JPEG} from '../../../../../store/actions/api';



class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: false,
            imgSource: null,
        }

        this._setImage = this._setImage.bind(this);

        this.FileReader = new FileReader();
        this.fileTypes = ['jpg', 'gif', 'png'];

    }

    

    componentDidMount() {
        this.setState({ imgSource: Placeholder });
    }

    _setImage = async (event) => {

        //cover for if user decided not to upload file
        if(event.target.files[0]){
            //console.log(event.target.files[0].name.split('.').pop().toLowerCase());
            //check if image is appropriate type
            //let correctType = this.fileTypes.indexOf(event.target.files[0].name.split('.').pop().toLowerCase()) > -1;

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
                this.setState({ imgSource: URL.createObjectURL(event.target.files[0]) });

                //convert image to blob
                //let imgBlob = new Blob(this.FileReader.readAsArrayBuffer(event.target.files[0]));
                console.log(event.target.files[0])
                let data = {
                    blob: event.target.files[0],
                    type: event.target.files[0].type,
                }
                console.dir(data);
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
                <input id={this.props.id} type={"file"} onChange={this._setImage} />
                <label htmlFor={this.props.id}>
                    <img className={classes.image} src={this.state.imgSource} alt={'upload'} />
                </label>
            </div>
        )

    }

}

export default ImageUpload;