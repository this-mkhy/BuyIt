import React, {Component} from 'react';
import Navbar from './compontents/Navbar';
import Home from './compontents/Home';
import Products from './compontents/Products';
import { Routes, Route } from 'react-router-dom';
import './App.css';
 
class App extends Component{

  render(){
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/products' element={<Products />} />
        </Routes>

      </div>
    );
  }
}

export default App;
