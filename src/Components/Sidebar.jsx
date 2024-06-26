import React, { useState } from "react";
import '../xyz.css';

import{
    FaBars
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar=({children})=>{
    const[isOpen,setIsOpen]=useState(true);
    const toggle=()=>setIsOpen(!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            
        },
        {
            path:"/tracker",
            name:"Tracker",
            
        },
        {
            path:"/conductivity",
            name:"Conductivity",
            
        },

        {
            path:"/nitrate",
            name:"Nitrate",
            
        },
        {
            path:"/temperature",
            name:"Temperature",
            
        },
        {
            path:"/turbidity",
            name:"Turbidity",
            
        },
    ]

    return(
        <div className="container" id='side'>
            <div style={{width: isOpen?"300px":"50px"}} className="sidebar">
                <div className="top_section">
                    <h1 style={{display: isOpen?"block":"none"}} className="logo">Admin</h1>
                    <div style={{marginLeft: isOpen?"50px":"0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen?"block":"none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    )
                    )
                }
            </div>
          <main>{children}</main>
        </div>
    );
};

export default Sidebar;