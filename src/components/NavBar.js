import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Nav} from 'react-bootstrap'

export const NavBar = ()=>{
  return(
    <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Test-Task</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#Search">Search</Nav.Link>
    </Nav>
  </Navbar>
</>
  )
}