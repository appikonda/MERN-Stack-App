import React from 'react';
import './App.css';

//import CreateStudent from './Components/CreateStudent.jsx';
//import EditStudent from './Components/EditStudent.jsx';
//import StudentsList from './Components/StudentList.jsx';

import {Router, Link} from 'react-router-dom';

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-student"} className="nav-link">
                React MERN Stack App
              </Link>
            </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-student"} className="nav-link">
                  Create Student
                </Link>
              </Nav>
            </Nav>  
          </Container>  
        </Navbar> 
      </header>
      </div>
    </Router>     
  );
}

export default App;
