import React from 'react';
import { Redirect, Route } from 'react-router-dom'
import Transition from '../../hoc/Transition/Transition';
import {authHeader} from './AuthService';


const PrivateRoute = ({ component: Component, auth, ...rest }) => {

  return (
    <Route
      {...rest}
      render={props =>
        authHeader() !== false? (
          <Transition><Component {...props} />  </Transition>
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} /> 
        )
      }
    />
  )
}



export default PrivateRoute;