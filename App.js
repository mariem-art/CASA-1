import React from 'react';
import logo from '../Logo.png';
import '../CSS.Components/App.css';
import About from './About';
import Acc from './Acc';


import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; 
import Foo from './Foo';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className='image-header'>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          
          <nav>
            <ul>
              <li className="Accueil">
                <Link to="/">Accueil</Link>
              </li>
              <li className="A-Propos">
                <Link to="/about">À Propos</Link>
              </li>
            </ul>
          </nav>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<Acc />} />
            <Route path="/about" element={<About />} /> 
          </Routes>
        </main>
      
      <div className="Contenu" >
        <Foo />
       </div>
       </div>
    </Router>
  );
}
export default App;