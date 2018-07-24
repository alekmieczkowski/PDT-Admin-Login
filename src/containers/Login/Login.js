import React from 'react';
import Login from '../../components/Login/Login';

const login = (props) => {

        const width = "340px";


        return(
                <Login width={width} signIn={props.signInHandler}/>
        );
}


export default login;