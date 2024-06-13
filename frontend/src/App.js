import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbarofpage from './navbar/navbar';
import Footer from './footer/footer';
import StudentSearch from './components/studentsearch';
import Home from './components/home'; // Assuming you have a Home component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbarofpage />
        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<StudentSearch />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
