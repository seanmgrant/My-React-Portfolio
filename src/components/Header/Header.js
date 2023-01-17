import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import './header.css';
import Typewriter from 'typewriter-effect';

export default function Header() {
  return (
    <Navbar className='navbar'>
    <Container>
      < Typewriter 
        options={{
          strings: ['Welcome to Sean Grants Portfolio!'],
          autoStart: true,
          loop: true,
        }}
      /> 
      <Nav className="justify-content-end">
        <NavLink to="/" className="nav-link">About Me</NavLink>
        <NavLink to="/Portfolio" className="nav-link">Portfolio</NavLink>
        <NavLink to="/Contact" className="nav-link">Contact</NavLink>
        <NavLink to="/Resume" className="nav-link">Resume</NavLink>
      </Nav>
    </Container>
  </Navbar>
  )
}