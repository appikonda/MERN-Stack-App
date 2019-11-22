import React from 'react';
import './App.css';

import CreateStudent from './Components/CreateStudent';
import EditStudent from './Components/EditStudent';
import StudentsList from '../Components/StudentList';

import {Router, Switch, Link} from 'react-router-dom';

import {Nav, Navbar, Container} from 'react-bootstrap'

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
          </Container>
        </Navbar>
      </header>
      </div>
    </Router>
    
  );
}

export default App;
