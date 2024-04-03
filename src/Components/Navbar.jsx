import React,{useState} from 'react';
import logo from'../images/logo.png';
import { Link } from 'react-router-dom';
import Feature from './Feature';

function Navbar() {
    const  [nav,setnav]=useState(false);
    const changeBackground=()=>{
        if(window.scrollY >=50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }


    const handleScroll = (section)=>{
        let element = document.getElementById(section);
        element.scrollIntoView({ behavior: 'smooth' });
    }

  window.addEventListener('scroll',changeBackground);
  return (
    <>
    <nav className={nav ? 'nav active' : 'nav'}>
        <a href='#' className='logo'>
            <img src={logo} alt=''/>
        </a>
        <input type='checkbox' className='menu-btn' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><a href='#' className='active'>Home</a></li>
            
            <li onClick={()=>{handleScroll('features')}}><a>Features</a></li> 
            <li onClick={()=>{handleScroll('about')}}><a>About</a></li>
            <li onClick={()=>{handleScroll('side')}}><a>Admin</a></li>
             
             
            
            
        </ul>

        
    </nav>
    
</>
  )
}

export default Navbar;
