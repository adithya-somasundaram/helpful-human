import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import logo from './logo.svg';
import './App.css';


import Header from './components/Header'

function App() {
  return (
    <div>
      <Router>
        <Header/>
      </Router>
    </div>
  );
}

export default App;
