import React from "react";
import { NavLink } from "react-router-dom"; // Import Link from React Router
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavMenu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          RTK PROJECT
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Ana sayfa
            </Nav.Link>
            <Nav.Link as={NavLink} to="/fetch-categories">
              Fetch: Categories
            </Nav.Link>
            <Nav.Link as={NavLink} to="/axios-categories">
              Axios: Categories
            </Nav.Link>
            <Nav.Link as={NavLink} to="/rtk-query-categories">
              RTK Query: Categories
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
