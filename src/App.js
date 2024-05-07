import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import HomePage from "./pages/HomePage/HomePage";
import Events from './pages/Events/Events';
import Launches from './pages/Launches/Launches';
import Vehicles from './pages/Vehicles/Vehicles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [backendData, setbackendData] = useState([{}]);

  useEffect(() => { 
    fetch('/api')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setbackendData(data)
    })
  }, [])

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/vehicles" element={<Vehicles />} />
   
        </Routes>
      </ BrowserRouter >
    </div>
  );
}

export default App;




