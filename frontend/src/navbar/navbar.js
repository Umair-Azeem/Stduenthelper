import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbarofpage() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="justify-content-between">
          <Navbar.Brand as={Link} to="/">WEBSITENAME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/search">SEARCH</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link href="#Logout">LOGOUT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarofpage;
