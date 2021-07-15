import React from 'react';
import './paintingofmonth.css';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Month from '../asset/abstract1.jpg';
import {Container} from 'react-bootstrap';
import {useState, useEffect} from 'react';

function Paintingofmonth() {

    const [showpainting, setPainting]=useState({
        name:"",
        description:"",
        image:"",
        partistname:""
      
      })


      const showdata= async(e)=>{
        // e.preventDefault();
       console.log("working");
          
       
            const res= await fetch("/paintingofmonth");
       
            const data= await res.json();
       
            setPainting(data);
       } 

       useEffect(()=>{
        showdata()
      },[])





  return (
   
    <div className="pmonth" > 
        <Container>
            <p className="abouttop">Painting OF MONTH</p>
           
        <Row>
            <Col xs={6} className="monthtext">
        
            <p className="monthtext1"> We dedicate a separate space for painting loved by all</p>
            <div className="pdetail">
           <p ><b>Name:</b>{showpainting.name} </p>
            <p><b>Description:</b>{showpainting.description}</p>
            <p><b>Medium:</b></p>
            <p><b>Artist:</b>{showpainting.partistname}</p>
            </div>
            
            
            </Col>
            <Col xs={6}>
            <div className="hovereffect">
        <img className="img-responsive" src={showpainting.image} alt=""></img>
        <div className="overlay">
          
           <a className="info" href="#">More About this</a>
        </div>
    </div>
           
            
       
            </Col>
        </Row>
        </Container>
                </div>
     
   
  );
}

export default Paintingofmonth;
