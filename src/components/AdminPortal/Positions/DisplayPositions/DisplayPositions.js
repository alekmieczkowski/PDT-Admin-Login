import React from 'react';
import classes from './DisplayPositions.scss';
import Position from './Positions/Positions';

const displayPositions = (props) =>{

    return(
        <div className={classes.container}>
            <div className={classes.header}>Existing Positions</div><br/>
            <div className={classes.areaContainer}>
            
            <Position text={"philanthropy chair"}/><Position text={"community service"}/><Position text={"position"}/>
            <Position text={"position"}/><Position text={"position"}/><Position text={"position"}/>
            <Position text={"position"}/><Position text={"position"}/><Position text={"position"}/>
            
            </div>
        </div>
    )

}

export default displayPositions;