import React from 'react';
import Header from './Components/Header'; 
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Feature from './Components/Feature';
import About from './Components/About';
import aboutimage from './images/download.png';
import Sidebar from './Components/Sidebar';
import Dashboard from './pages/Dashboard';
import Conductivity from './pages/Conductivity';
import Nitrate from './pages/Nitrate';
import Temperature from './pages/Temperature';
import Turbidity from './pages/Turbidity';
import Tracker from './pages/Tracker';

// import Presentation from './Components/Presentation';


function App() {
  return (
    <BrowserRouter>

    <div className="App">
      
      <Header/>
      <Feature/>
      <About image={aboutimage} title='WQI'/>
      <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/tracker" element={<Tracker/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/conductivity" element={<Conductivity/>}/>
        <Route path="/nitrate" element={<Nitrate/>}/>
        <Route path="/temperature" element={<Temperature/>}/>
        <Route path="/turbidity" element={<Turbidity/>}/>
      </Routes>
      </Sidebar>  
    </div>
    </BrowserRouter>
         
  );
}

export default App;
