import React from 'react';
import './App.css';

import CreateStudent from './Components/CreateStudent';
import EditStudent from './Components/EditStudent';
import StudentsList from '../Components/StudentsList';

import {Router, Switch} from 'react-router-dom';

import {Nav, Navbar} from 'react-bootstrap'

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <Navbar
        
         <CreateStudent/>
              </header>
    </div>
    </Router>
    
  );
}

export default App;
