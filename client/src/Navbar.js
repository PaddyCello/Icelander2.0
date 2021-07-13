//! Change text colour to work against any background
//? Hamburger opening needs to not affect layout the way it does currently

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { userIsAuthenticated } from './components/auth/helpers/auth'

const MyNavbar = () => {
  const history = useHistory()

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }
  const location = useLocation()
  useEffect(() => {
  }, [location.pathname])


  return (
    <Navbar expand="lg" className="bring-to-front">
      <Navbar.Brand href="/"><img className="logo" src='/assets/logo_white_large.jpeg' /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/map">Map</Nav.Link>
          <Nav.Link href="/packages">Packages</Nav.Link>
          {userIsAuthenticated() &&
            <>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
            </>
          }
          {!userIsAuthenticated() &&
            <>
              <Nav.Link href="/register">Sign up</Nav.Link>
              <Nav.Link href="/login">Log in</Nav.Link>
            </>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar