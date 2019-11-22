import React from 'react';
import './App.css';

import CreateStudent from './Components/CreateStudent.jsx';
//import EditStudent from './Components/EditStudent.jsx';
//import StudentsList from './Components/StudentList.jsx';

import {Router, Link} from 'react-router-dom';

import { Navbar, Container} from 'react-bootstrap'

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <Navbar>
          <Container>
            <Navbar.Brand>
              <Link to ={"/create-student"} className="nav-link">
                React MERN Stack Application
              </Link>
            </Navbar.Brand>
            <CreateStudent>
          </Container>
        </Navbar>
      </header>
      </div>
    </Router>
    
  );
}

export default App;
