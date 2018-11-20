import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter} from 'react-router-dom';

import Routing from './containers/Routing/Routing';

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <Routing/>
      </BrowserRouter>  
    );
  }
}



export default App;
