import React from 'react';
import './banner.css';
import {Carousel,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Banner1 from '../asset/background1.jpg';
import Banner2 from '../asset/background2.jpg';
import Banner3 from '../asset/background3.jpg';


function Banner()  {
  
    return (
        
<section id="banner">
    
    <div id="bg-color">

    <Carousel fade prevLabel='' nextLabel='' interval={2000}>
  <Carousel.Item>
    <img
      className="home"
      src={Banner3} 
      alt="First slide"
    />
    <Carousel.Caption>
      <p> Welcome to Galleria</p>
      <p>Find your light</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="home"
      src={Banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="home"
      src={Banner1}
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      
     
       
    </div>
  </section>
  
    );
}

export default Banner;