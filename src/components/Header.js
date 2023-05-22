import React from 'react'
import Container from "react-bootstrap/Container";
import { HashLink } from "react-router-hash-link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const Header = () => {
  return (
    <header>
      <div className="d-flex justify-content-end">
        <Navbar expand="lg">
          <Container fluid>
            <div></div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="text-center fs-m fw-300"
                style={{
                  maxHeight: "500px",
                }}
                navbarScroll
              >
                <Nav.Link className="nav-link" href="/">
                  Home
                </Nav.Link>
                <Nav.Link className="nav-link" href="/profile">
                  Profile
                </Nav.Link>
                <Nav.Link className="nav-link" href="/skills">
                  Skills
                </Nav.Link>
                <HashLink className="nav-link" to="/#works">
                  Works
                </HashLink>
                <HashLink className="nav-link" to="/#contact">
                  Contact
                </HashLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
}

export default Header