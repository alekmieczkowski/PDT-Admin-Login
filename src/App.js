import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, HashRouter} from 'react-router-dom';

import Routing from './containers/Routing/Routing';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Routing/>
      </HashRouter>  
    );
  }
}



export default App;
