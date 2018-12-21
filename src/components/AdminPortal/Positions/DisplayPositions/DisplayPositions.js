import React from 'react';
import classes from './DisplayPositions.scss';
import Position from './Positions/Positions';

const displayPositions = (props) =>{

    return(
        <div className={classes.container}>
            <div className={classes.header}>Existing Positions</div><br/>
            <div className={classes.areaContainer}>
            {props.data !== null && typeof props.data !== undefined ? 
                props.data.map(positionObj =>{
                    return <Position text={positionObj.title} id={positionObj.position_id}/>;
                })
                :
                <div className={classes.header}>No Positions</div>
            }
            
            </div>
        </div>
    )

}

export default displayPositions;