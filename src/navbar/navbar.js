import React from 'react';
import './navbar.css';
import { NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';




function Header()  {
  
    return (
        
    
          <div  >
            
            <Navbar bg="dark" variant="dark" fixed="top" >
    <Navbar.Brand href="#home">Galleria</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/paintinglist">Paintings</Nav.Link>
      <Nav.Link href="/artist">Our Artists</Nav.Link>
      <Nav.Link href="/paintingofmonth">Painting of the Month</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/signup">Signup</Nav.Link>
      <Nav.Link href="/paintingupload">Upload Painting of the Month</Nav.Link>
      {/* <Nav.Link href="/paintinginfo">Painting Info</Nav.Link> */}
      {/* <Nav.Link href="/filter">Filter</Nav.Link> */}
      <Nav.Link href="/uploadartwork">Upload Artwork</Nav.Link>
      <Nav.Link href="/profile">Artist's Profile</Nav.Link>
    </Nav>
   
  </Navbar>

             
             

              
               
               
               
          </div>
         
        

  
    );
}

export default Header;