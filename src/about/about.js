import React from 'react';
import './about.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Banner1 from '../asset/background1.jpg';
import About1 from '../asset/hush.jpg'
import { Container } from 'react-bootstrap';



function About()  {
  
    return (
        <div className="galleriaabout">
            <Container>
            <p className="abouttop">ABOUT US</p>
           
        <Row>
            <Col xs={6} className="abouttext">
        
            <p className="para1"> Welcome to Galleria</p>
           
           
            <p className="para2">Find your light</p>
            
            <p>Galleria is all about giving opportunities to all the emerging artists across India.
                we believe in giving full exposure to whosoever has potential.
                Browsing our online gallery is meant to feel like a leisurely afternoon visiting local galleries – 
                from the comfort of your home. We believe that good art brings people together, elevates living spaces, and 
                transforms lives.
            </p>
            
            </Col>
            <Col xs={6}>
            <img src={About1} className="inner-img"></img>
            </Col>
        </Row>
        </Container>
        </div>

  
    );
}

export default About;