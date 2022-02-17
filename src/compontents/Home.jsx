import React from 'react'
import mainLogo from '../assets/bg4.jpg'; 
import '../App';  
import Products from './Products';

function Home() {
  return (
    <div className='hero'> 
        <div className="card bg-dark text-white border-0">
          <img src={mainLogo} className="card-img" alt="background" height="550px"/>
          <div className="card-img-overlay d-flex flex-column justify-content-center">
              <div className="container">
                  <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                  <p className="card-text lead fs-2">CHECK OUT ALL TRENDS</p>
              </div> 
          </div>
        </div>
        <Products />
    </div>
  )
}

export default Home