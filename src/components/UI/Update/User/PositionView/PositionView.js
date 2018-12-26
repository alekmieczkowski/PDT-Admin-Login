import React from 'react';
import classes from './PositionView.scss';

const positionView = (props) => {

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                {props.title}
            </div>
            <div className={classes.positionContainer}>
                {props.data.map(position => {
                    return null;
                })}
            </div>
        </div>
    )

}

export default positionView;