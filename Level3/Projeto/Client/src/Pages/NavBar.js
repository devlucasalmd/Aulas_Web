import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { useState } from 'react'
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from 'react-router-dom'
import About from './About'
import Notes from './Notes'
import Container from 'react-bootstrap/Container';

function NavBar() {

  return (
    <>
      <Navbar bg="dark" variant='dark'>
        <Container>
          <Navbar.Brand><Link to="/">Web Lucas</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/about">Sobre</Link>
            <Link to="/notes">Anotações</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/noticias">Notícias</Link>
          </Nav>
        </Container>
      </Navbar>
      <br/>      
    </>
    );
  }
export default NavBar;