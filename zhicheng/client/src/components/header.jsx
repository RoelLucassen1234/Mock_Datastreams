import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/home">
          <div className="frontsize">Corona Rapid Test Data</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
