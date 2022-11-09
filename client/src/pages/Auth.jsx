import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Card, Container, Form, Button, Row, NavLink, Nav } from 'react-bootstrap'
import {REGISTRATION, LOGIN} from '../utils/consts'

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  console.log(location);
  const isLogin = location.pathname === LOGIN

  console.log(email);
  return (
    <Container>
      <Card>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
          </Form.Group>
          <Row>
          {isLogin? 
            <div>
              Don't have account? <Nav.Link href={REGISTRATION}>REGISTRATION</Nav.Link>
            </div>
            :
            <div>
              Do you have account?<Nav.Link href={LOGIN}>LOGIN</Nav.Link>
            </div>
            }
          </Row>
            <Button variant="primary" type="submit">{isLogin ? "LOG IN" : "REGISTRATION" }</Button>
        </Form>
      </Card>
    </Container>
  )
}

export default Auth