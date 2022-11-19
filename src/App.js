import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ForgotPassword from './pages/ForgotPassword';
import Contact from './pages/Contact';
import About from './pages/About';
function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pages/SignUp" element={<SignUp />} />
        <Route path="/pages/SignIn" element={<SignIn />} />
        <Route path="/pages/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/pages/Contact" element={<Contact />} />
        <Route path="/pages/About" element={<About />} />



      </Routes>
    </Router>

  );
}

export default App;
