import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "react-bootstrap/Nav";

import CreateStudent from './Components/CreateStudent.jsx';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-student"} className="nav-link">
                  Create Student
                </Link>
              </Nav>
      </header>
    </div>
  );
}

export default App;