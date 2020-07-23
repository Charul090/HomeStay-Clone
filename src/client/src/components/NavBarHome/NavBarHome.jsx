import React from "react";
import {Link} from 'react-router-dom'
import  "./NavBarHome.css";
import {Navbar,Nav,NavDropdown, Button, NavbarBrand,} from 'react-bootstrap';
import Login from '../Login/Login';
import Register from '../Register/Register'

const NavBarHome = () => {
 
  return (
      <>

      <Navbar>
        <div className="navbar-brand"><a href="/"><img className ="img img-fluid" src="https://www.homestay.com/assets/logo-homestay-36a9388d17da279b965e5b0dc5153eab12f98ceef3e29332a720df00b71fa2ac.svg"/></a></div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="ml-auto d-flex">
            <Nav>
              <NavDropdown className="colorChange" bg="light" title="Destination" >
                  <NavDropdown.Item href="#action/3.1"><Link to="/destination">Hyderabad</Link></NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Banglore</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Mumbai</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Chennai</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Login />
          
            <Register />
          
          <Button variant="outline-dark">List a Room</Button>{' '}

        </div>
          </Navbar.Collapse>
    </Navbar>
  </>
  )
};

export default NavBarHome;