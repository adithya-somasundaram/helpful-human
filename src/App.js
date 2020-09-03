import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import logo from './logo.svg';
import './App.css';


import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ListView from './components/ListView'
import DetailView from './components/DetailView'

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Sidebar/>
        <Route exact path="/" component={ListView}/>
        <Route exact path="/detail-view" component={DetailView}/>
      </Router>
    </div>
  );
}

export default App;
