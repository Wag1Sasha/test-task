import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Test-Task</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/">Home</Link>
        </Nav>
      </Navbar>
    </>
  );
};