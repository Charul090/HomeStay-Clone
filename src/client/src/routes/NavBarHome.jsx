import React from "react";
import {Link} from 'react-router-dom'
import styles from "./NavBarHome.module.css";
import {Navbar,Nav,NavDropdown, Button, NavbarBrand,} from 'react-bootstrap';
import Login from './Login';
import Register from './Register'

const NavBarHome = () => {
 
  return (
      <>
    
      <Navbar className=" m-0">
        <NavbarBrand><Link to="/"><img src="https://www.homestay.com/assets/logo-homestay-36a9388d17da279b965e5b0dc5153eab12f98ceef3e29332a720df00b71fa2ac.svg"/></Link></NavbarBrand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <div className="ml-auto d-flex">
        <Nav variant="light">
          <NavDropdown variant="light" bg="light" title="Destination" >
            <NavDropdown.Item href="#action/3.1"><Link to="/destination">Hyderabad</Link></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Banglore</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Mumbai</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Chennai</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Login />
        <Nav >
        <Register />
        </Nav>
        
        {/* <Nav > */}
        {/* <NavDropdown title="Login" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.3" >Host Login</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Guest Login</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className={styles.nav}>
        <NavDropdown title="Sign-up" id="collasible-nav-dropdown" className="navdropdown">
            <NavDropdown.Item href="#action/3.3">Host Sign-up</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Guest Sign-up</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav >
        <NavDropdown title="Inspire Me" id="collasible-nav-dropdown">
          </NavDropdown>
        </Nav> */}
        <Button variant="outline-light">List a Room</Button>{' '}

        </div>
          </Navbar.Collapse>
    </Navbar>
  </>
  )
};

export default NavBarHome;