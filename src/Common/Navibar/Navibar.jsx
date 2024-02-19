import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Navibar.css"
const Navibar = () => {
  return (
    <div className="navibar text-light">
      <Navbar collapseOnSelect expand="lg" className="bg-dark p-2">
        <Container>
          <Navbar.Brand className="text-light" href="/">A..B..C..</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link className="text-light" href='/about'>About</Nav.Link>
              <Nav.Link className="text-light" eventKey={2} href='/affiliates'>Affiliates</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navibar