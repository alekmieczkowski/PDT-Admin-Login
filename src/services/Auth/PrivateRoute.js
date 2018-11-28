import React from 'react';
import { Redirect, Route } from 'react-router-dom'
import Transition from '../../hoc/Transition/Transition';


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
          <Transition><Component {...props} />  </Transition>
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} /> 
        )
      }
    />
  )
}



export default PrivateRoute;