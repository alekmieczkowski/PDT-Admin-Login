import React from 'react';
import Spinner from '../Spinner';
const screen = (props) => {

    return (

        <Spinner isActive={props.active}>
                   {props.children}
        </Spinner>

    );

}

export default screen;