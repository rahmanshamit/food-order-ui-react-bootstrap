import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function TopNavbar () {
    return (
        <div>
        <Navbar variant="dark">
        <Navbar.Brand href="#home">Fresh Meal Plan</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Plans" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Plan A</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Plan B</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Plan C</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" className="active-menu">Menu</Nav.Link>
          <Nav.Link href="#">How It Works</Nav.Link>
          <Nav.Link href="#">Get $40!</Nav.Link>
        </Nav>
          <Button className="signup mr-sm-2" type="submit">Sign Up!</Button>
          <Nav.Link href="#">My Account</Nav.Link>
        </Navbar.Collapse>
       </Navbar>
        </div>
    )
}

export default TopNavbar;
