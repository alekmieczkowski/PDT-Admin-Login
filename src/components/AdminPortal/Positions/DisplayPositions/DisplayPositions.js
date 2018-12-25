import React from 'react';
import classes from './DisplayPositions.scss';
import Position from './Positions/Positions';

const displayPositions = (props) =>{

    console.log("Positions data: " + props.data);
    return(
        <div className={classes.container}>
            <div className={classes.header}>Existing Positions</div><br/>
            <div className={classes.areaContainer}>
            {props.data !== null && typeof props.data != "undefined" ? 
                props.data.map(positionObj =>{
                    return <Position key={positionObj.position_id} text={positionObj.title} id={positionObj.position_id}/>;
                })
                :
                <div className={classes.header}>No Positions</div>
            }
            
            </div>
        </div>
    )

}

export default displayPositions;