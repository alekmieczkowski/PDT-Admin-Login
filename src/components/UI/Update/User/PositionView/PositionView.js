import React from 'react';
import classes from './PositionView.scss';
import Position from '../Position/Position';

const positionView = (props) => {

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                {props.title}
            </div>
            <div className={classes.positionContainer}>
                {props.data.length > 0 ? props.data.map(position => {
                    return <Position data={position} type={props.type} onClick={props.onClick}/>;
                })
            : "No Positions"}
            </div>
        </div>
    )

}

export default positionView;