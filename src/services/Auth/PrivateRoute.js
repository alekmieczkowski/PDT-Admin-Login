import React from 'react';
import { Redirect, Route } from 'react-router-dom'


const checkAuth = (auth) =>{
  const token = localStorage.getItem('token');
  console.log("Auth value: " + auth);


  if(!token || !auth){
    return false;
  }
  return true;
}

const PrivateRoute = ({ component: Component, auth, ...rest }) => {

  return (
    <Route
      {...rest}
      render={props =>
        checkAuth(auth) ? (
          <Component {...props} /> 
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} /> 
        )
      }
    />
  )
}



export default PrivateRoute;