import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// local style
import './App.css';

// import components
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
