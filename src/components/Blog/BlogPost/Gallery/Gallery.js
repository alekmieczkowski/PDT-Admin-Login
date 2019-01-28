import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import classes from './Gallery.scss';
//import "react-image-gallery/styles/css/image-gallery.css";
import "./image-gallery.css";


class Gallery extends Component {

    state = {
        images: [],
        display: true,
    }
    componentDidMount() {

        //set images to state
        let imageArr = [];
        this.props.images.forEach(image => {
            let imageLink = process.env.REACT_APP_SERVER_IP + image.location;
            imageArr.push({ original: imageLink, thumbnail: imageLink, originalClass: classes.image });
        })
        this.setState({ images: imageArr });
    }

    componentDidUpdate(prevProps){
        //set images to state
        if(this.state.display === false){
            this.setState({display: true});
        }
        else if (this.props.images !== prevProps.images) {
            this.setState({display: false});
            let imageArr = [];
            this.props.images.forEach(image => {
                let imageLink = process.env.REACT_APP_SERVER_IP + image.location;
                imageArr.push({ original: imageLink, thumbnail: imageLink, originalClass: classes.image });
            })
            this.setState({ images: imageArr});
            
        }
        
    }
   

    render() {
        return (
            <div className={classes.container}>
            {this.state.display ? 
                <ImageGallery
                    items={this.state.images}
                    showPlayButton={false}
                    showNav={false}
                    disableArrowKeys={true}
                    lazyLoad={false}
                    thumbnailPosition={"top"}
                    showFullscreenButton={false}
                    startIndex={0}
                    showThumbnails={this.props.images.length > 1 ? true : false}
                /> : null}
            </div>


        );
    }

}

export default Gallery;
