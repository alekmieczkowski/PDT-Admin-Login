import React from 'react';
import { Redirect, Route } from 'react-router-dom'


const PrivateRoute = ({ component: Component, auth, ...rest }, location) => {

  const data = console.log("Redirecting to login");
  console.log("Private Route: " + location.toString());
  return (
    <Route
      {...rest}
      render={props =>
        auth ? (
          <Component {...props} /> 
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} /> 
        )
      }
    />
  )
}



export default PrivateRoute;