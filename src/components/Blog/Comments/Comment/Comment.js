import React from 'react';
import classes from './Comment.scss';
import LikeButton from './LikeButton/LikeButton';
import Placeholder from '../../../../assets/img/Homepage/placeholder-user.png';


const comment = (props) => {

    return (
        <div className={classes.container}>
            <div className={classes.commentContainer}>
                <div className={classes.profileContainer}>

                    <div className={classes.imageContainer}>
                        <img src={Placeholder} alt={"Profile Picture"} className={classes.profileImg} />
                    </div>

                    <div className={classes.profileInfoContainer}>

                        <div className={classes.nameContainer}>
                            Alek Mieczkowski<span className={classes.submittedText}>&nbsp;&nbsp;xx/xx/xx</span>
                        </div>

                        <div className={classes.bondContainer}>
                            #55 
                        </div>

                    </div>

                    <div className={classes.likeContainer}>
                        <LikeButton emblemTextCSS={classes.buttonEmblemText} emblemCSS={classes.buttonEmblem} css={classes.button} likes={12} iconSize={22} iconColor={'#003056'} />
                    </div>

                </div>

                <div className={classes.commentTextContainer}>
                    This is a comment. It is going to be very long because I need to figure out how all of this is going to display. If it works on a large scale, it should be fine on a short scale due to the minimum height limit.
                </div>
            </div>


        </div>
    );

}

export default comment; 