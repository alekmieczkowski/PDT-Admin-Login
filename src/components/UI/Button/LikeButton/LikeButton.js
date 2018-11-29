import React, {Component} from 'react';
import {FaHeart, FaHeartO} from 'react-icons/lib/fa/';
import classes from './LikeButton.scss';



class LikeButton extends Component{

    state={
        liked: false,
        likes: 0
    }

    componentDidMount(){
        this.setState({likes: this.props.likes});
    }

    _handleLike = () =>{
        this.setState({liked: !this.state.liked});
        
        //increment likes
        let likes = this.state.likes;

        if(this.state.liked){
            likes--;
        }
        else{
            likes++;
        }
        this.setState({likes: likes});
    }

    render(){

        let icon = <FaHeartO size={this.props.iconSize} color={this.props.iconColor}/>
        if(this.state.liked){
            icon = <FaHeart size={this.props.iconSize} color={this.props.iconColor}/>
        }

        let buttonCSS = classes.container;
        if(this.props.css){
            buttonCSS = [classes.container, this.props.css].join(' ');
        }

        return(
            <div className={buttonCSS} onClick={this._handleLike} >
                <div className={classes.emblem}><div className={classes.emblemText}>{this.state.likes}</div></div>
                {icon}
            </div>
           
        );
    }

}

export default LikeButton;