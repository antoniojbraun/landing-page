import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

function Header() {
  return (
    <Navbar expand="lg">
        <Container>
            <Navbar.Brand href='#home'>
                <h1 className='display-6'>
                    LOGO
                </h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-bav' />
            <Navbar.Collapse id='basic-nav-bar'>
            <Nav className='ms-auto'>
                <Nav.Link href='#home'>
                    <p className='fs-5'>Home</p>
                </Nav.Link>
                <Nav.Link href='#home'>
                    <p className='fs-5'>
                        Link 1
                    </p>
                </Nav.Link>
                <Nav.Link href='#home'>
                    <p className='fs-5'>
                        Link 2
                    </p>    
                </Nav.Link>
                <Nav.Link href='#home'>
                    <p className='fs-5'>
                        Link 3
                    </p>
                </Nav.Link>
                <button className='btn btn-primary button-navbar'>Comprar</button>
            </Nav>
            </Navbar.Collapse>
            
        </Container>

    </Navbar>
    


    
  )
}

export default Header
