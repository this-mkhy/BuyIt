import React, {Component} from 'react';
import Navbar from './compontents/Navbar';
import Home from './compontents/Home';
import Products from './compontents/Products';

import './App.css';

class App extends Component{

  render(){
    return (
      <div className="App">
        <Navbar />
        <Home />
        <Products />
      </div>
    );
  }
}

export default App;
