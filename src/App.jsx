import { useState } from 'react'
import './App.css';
import Navbar from './components/ui/navbar.jsx/navbar';
import Home from './pages/home';



function App() {
  
  return (
      <div>
        <header>
          <Navbar/>
        </header>
           <Home/>
      </div>
  )
}

export default App
