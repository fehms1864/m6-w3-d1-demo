import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  
    return (
      <Navbar className="navbar-dark bg-dark px-5" expand="md">
        <NavbarBrand tag={Link} to="/">Bar Chart</NavbarBrand>
        <NavbarBrand tag={Link} to="/tree">Tree Node</NavbarBrand>
        <NavbarBrand tag={Link} to="/lightorb">Light Orb</NavbarBrand>
      </Navbar>
    )
  
}

export default Navbar