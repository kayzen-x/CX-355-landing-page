import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import LandingPage from './components/LandingPage';


function App() {
  return (
    <div>
      <LandingPage>
        <Navbar />
      </LandingPage>
      
    </div>
  )
}

export default App;
