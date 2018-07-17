import React from 'react';
import classes from './Form.css';
import PropTypes from 'prop-types';


const form = (props) => {

    const formWidth = [classes.FormFrame, "min-width: "+ props.minWidth + ";"];

    return(
        <div className={formWidth.join(' ')}>
            {props.children}
        </div>
    );

};

form.propTypes = {
    minWidth: PropTypes.string.isRequired
}

export default form;