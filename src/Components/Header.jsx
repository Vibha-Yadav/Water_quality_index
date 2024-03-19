import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div id='main'>
        <Navbar/>
        <div className='name'>
          <h1>
            <span>WELCOME TO WQI</span>
          </h1>

          <a href='#' className='cv-btn'>Login</a>


        </div>
    </div>
  )
}

export default Header;