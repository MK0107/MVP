import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function NavigationBar() {
  return (
    <div>
      <Navbar bg="none" expand="lm">
        <Navbar.Brand href="#home" className="NavTitle" >MELLOW</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Account</Nav.Link>
            <NavDropdown title="Tasks" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Group</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Chart</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
