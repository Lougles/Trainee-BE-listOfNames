import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">HOME</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/list">List</Nav.Link>
          <Nav.Link href="/auth">Auth</Nav.Link>
        </Nav>
      </Container>
  </Navbar>
  )
}

export default NavBar