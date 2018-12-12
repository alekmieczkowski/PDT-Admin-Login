import React from 'react';
import classes from './Comment.scss';
import LikeButton from './LikeButton/LikeButton';


const comment = (props) => {

    return (
        <div className={classes.container}>
            <div className={classes.commentContainer}>
                <div className={classes.profileContainer}>

                    <div className={classes.imageContainer}>
                        <img src={props.data.user.google_picture} alt={"Profile"} className={classes.profileImg} />
                    </div>

                    <div className={classes.profileInfoContainer}>

                        <div className={classes.nameContainer}>
                            {props.data.user.full_name}<span className={classes.submittedText}>&nbsp;&nbsp;{props.data.created_at.substring(0, 10).split("-").join("/")}</span>
                        </div>

                        <div className={classes.bondContainer}>
                            #55 
                        </div>

                    </div>

                    <div className={classes.likeContainer}>
                        <LikeButton emblemTextCSS={classes.buttonEmblemText} emblemCSS={classes.buttonEmblem} css={classes.button} commentId={props.data.comment_id} clicked={props.updateLike}  likedByUser={props.data.isLikedByUser} likes={props.data.likes} iconSize={22} iconColor={'#003056'} />
                    </div>

                </div>

                <div className={classes.commentTextContainer}>
                    {props.data.content}
                </div>
            </div>


        </div>
    );

}

export default comment; 