import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';
import classes from './Gallery.scss';
import "react-image-gallery/styles/css/image-gallery.css";


class Gallery extends Component {

    state={
        images: [],
    }
    componentDidMount(){

        //set images to state
        let imageArr = [];
        this.props.images.forEach(image=>{
            let imageLink = process.env.REACT_APP_SERVER_IP + "" + image.location;
            imageArr.push({original: imageLink, thumbnail: imageLink, originalClass: classes.image});
        })
        this.setState({images: imageArr});
    }
    
    render() {
        

    
      return (
          <div className={classes.container}>
            <ImageGallery 
                items={this.state.images} 
                showPlayButton={false}
                showNav={false}
                disableArrowKeys={true}
                lazyLoad={false}
                thumbnailPosition={"top"}
                showThumbnails={this.props.images.length > 1 ? true : false}
            />
          </div>
        
      );
    }
  
  }

  export default Gallery;