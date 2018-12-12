import React, {Component} from 'react';
import {MdComment} from 'react-icons/lib/md';
import classes from './CommentButton.scss';
import Loading from '../../../../assets/img/Spinner/loading-blue.gif';



class CommentButton extends Component{

    render(){

        let buttonCSS = classes.container;
        if(this.props.css){
            buttonCSS = [classes.container, this.props.css].join(' ');
        }

        return(
            <div className={buttonCSS} onClick={this._toggleClick}>
                <MdComment size={this.props.iconSize} color={this.props.iconColor}/>
                <div className={classes.emblem}><div className={classes.emblemText}>{this.props.comments}</div></div>
                
            </div>
           
        );
    }

}

export default CommentButton;