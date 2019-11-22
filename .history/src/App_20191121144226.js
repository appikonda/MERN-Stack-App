import React from 'react';
import './App.css';

import CreateStudent from './Components/CreateStudent';
import EditStudent from './Components/EditStudent';
import StudentsList from '../Components/StudentsList';

import {Router, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        
         <CreateStudent/>
              </header>
    </div>
    </Router>
    
  );
}

export default App;
