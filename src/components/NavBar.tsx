import React from 'react';

import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';

export const NavBar = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Test-Task</Navbar.Brand>
    <Nav className="mr-auto">
      <Link to="/">Home</Link>
    </Nav>
  </Navbar>
);
