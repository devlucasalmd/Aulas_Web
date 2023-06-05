import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {BrowserRouter as Route, Link, BrowserRouter} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import "../Styles/NavBar.css"

function NavBar() {

  return (
    <>
      <Navbar className='header'>
        <Container className="header">
          <Navbar.Brand><Link to="/">Web Lucas</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Link className='link'to="/about">Sobre</Link>
            <Link className='link' to="/notes">Anotações</Link>
            <Link className='link' to="/blog">Blog</Link>
            <Link className="link" to="/noticias">Notícias</Link>
          </Nav>
        </Container>
      </Navbar>
      <br/>      
    </>
    );
  }
export default NavBar;