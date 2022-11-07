import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Trainee Backend developer</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home"></Nav.Link>
          <Nav.Link href="#features"></Nav.Link>
          <Nav.Link href="#pricing"></Nav.Link>
        </Nav>
      </Container>
  </Navbar>
  )
}

export default NavBar