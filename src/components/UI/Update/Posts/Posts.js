import React from 'react';
import Update from '../Update';
import classes from './Posts.scss';
const posts = (props) => {

    return (

        <Update isActive={props.active}>
                   {props.children}
        </Update>

    );

}

export default posts;