import React, {Component} from 'react';
import classes from './Comment.scss';
import LikeButton from './LikeButton/LikeButton';
import Button from '../../../UI/Button/Button';
import Wrapper from '../../../../hoc/Wrapper/Wrapper'
import Textarea from 'react-textarea-autosize';
import {isValidInput} from '../../../../services/InputValidationService';
import {showError} from '../../../../services/ErrorService';
import {updateComment} from '../../../../services/PostService';
import Linkify from 'react-linkify';

class Comment extends Component{

    state={
        comment: "",
        edit: false,
        updateIcon: false,
    }

    //load comment data into state on mount
    componentDidMount(){
        this.setState({comment: this.props.data.content})
    }

    //optimize to avoid re renders
    shouldComponentUpdate(nextProps, nextState){
        if(this.state.comment !== nextProps.data.content || this.state.edit !== nextState.edit){
            return true;
        }
        return false;
    }

    _deleteComment = () =>{
        this.props.delete(this.props.data.comment_id);
    }

    //toggle update comment view
    _updateComment = () =>{
        this.setState({edit: true});
    }


    //update comment
    _saveUpdate = async () =>{
        //set update icon to prevent user spam clicks
        this.setState({updateIcon: true});
        //check if input is valid, and is not the same as the old comment input
        if(isValidInput(this.state.comment) && this.state.comment !== this.props.data.content){
            
            await updateComment(this.props.data.comment_id, this.state.comment);
            this.setState({edit: false});
            this.forceUpdate();
        }
        else{
            showError("Invalid Input");
        }
        //turn off update icon
        this.setState({updateIcon: false});
    }

    _dismissUpdate = () =>{
        this.setState({comment: this.props.data.content, edit: false});
    }

    _updateTextArea = (event)=>{
        this.setState({comment: event.target.value});
    }

    render(){
        return (
            <div className={classes.container}>
                <div className={classes.commentContainer}>
                    <div className={classes.profileContainer}>
    
                        <div className={classes.imageContainer}>
                            <img src={this.props.data.user.google_picture} alt={"Profile"} className={classes.profileImg} />
                        </div>
    
                        <div className={classes.profileInfoContainer}>
    
                            <div className={classes.nameContainer}>
                                {this.props.data.user.full_name}<span className={classes.submittedText}>&nbsp;&nbsp;{this.props.data.created_at.substring(0, 10).split("-").join("/")}</span>
                            </div>
    
                            <div className={classes.bondContainer}>
                                #{this.props.data.user.bond_number}
                            </div>
    
                        </div>
    
                        <div className={classes.likeContainer}>
                            {this.props.admin ? 
                                
                                    this.state.edit ?
                                    <Wrapper>
                                        
                                        {this.state.updateIcon ? <Button clicked={null} type="loading" buttonCSS={classes.button} iconSize={26} iconColor={"#003056"}></Button> : <Button clicked={this._saveUpdate} buttonCSS={classes.button} iconSize={26} iconColor={'#003056'} type={"submit"}></Button>}
                                        <Button clicked={this._dismissUpdate} buttonCSS={classes.button} iconSize={26} iconColor={'#003056'} type={"close"}></Button>
                                    </Wrapper>
                                    :
                                    <Wrapper>
                                        <Button clicked={this._updateComment} buttonCSS={classes.button} iconSize={26} iconColor={'#003056'} type={"edit"}></Button>
                                        <Button clicked={this._deleteComment} buttonCSS={classes.button} iconSize={26} iconColor={'#003056'} type={"delete"}></Button>
                                    </Wrapper>
                                    
                                    
                               
                            : null}
                            <LikeButton emblemTextCSS={classes.buttonEmblemText} emblemCSS={classes.buttonEmblem} css={classes.button} commentId={this.props.data.comment_id} clicked={this.props.updateLike}  likedByUser={this.props.data.isLikedByUser} likes={this.props.data.likes} iconSize={22} iconColor={'#003056'} />
                        </div>
    
                    </div>
    
                    <div className={classes.commentTextContainer}>
                        {this.state.edit? 
                            
                            <Textarea 
                                className={classes.textArea} 
                                value={this.state.comment} 
                                onChange={this._updateTextArea}
                                maxRows={5}
                                maxLength={250}
                                />
                            
                            :
                            <Linkify  properties={{target: '_blank', style: {fontStyle: 'italic'}}}>
                                {this.state.comment}
                            </Linkify>}
                    </div>
                </div>
    
    
            </div>
        );
    }
   

}

export default Comment; 