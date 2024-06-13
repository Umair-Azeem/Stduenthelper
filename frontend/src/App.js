import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbarofpage from './navbar/navbar';
import Footer from './footer/footer';
import StudentSearch from './components/studentsearch';
import Home from './components/home'; // Assuming you have a Home component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
