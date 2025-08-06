import React from 'react'
import './navigation.css'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';


import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { MdContacts } from "react-icons/md";
import { GrProjects } from "react-icons/gr";

const Navigationbar = () => {
  return (
    <>
      {['xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar  bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand as={Link} to="/" className='fw-bold mx-2 text-success' style={{}}>
            <img
              alt=""
              src="Ashwin4.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
              {' '}
              <span className='mx-3'>ASBENDRA</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="bottom"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='text-success'>
                  ASBENDRA
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-2">
                  <Nav.Link as={Link} to="/"><FaHome /><span className='m-2'>Home</span></Nav.Link>
                  <Nav.Link as={Link} to="/about"><FcAbout /><span className='m-2'>About</span></Nav.Link>
                  <Nav.Link as={Link} to="/skills"><GiSkills /><span className='m-2'>Skills</span></Nav.Link>
                  <Nav.Link as={Link} to="/projects"><GrProjects /><span className='m-2'>Projects</span></Nav.Link>
                  <Nav.Link as={Link} to="/contacts"><MdContacts /><span className='m-2'>Contact</span></Nav.Link>
                </Nav>
                <Link to="/register">
                <Button variant="outline-success text-white" className='mx-md-3 my-2 my-sm-0'>Register</Button>
                </Link>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Navigationbar