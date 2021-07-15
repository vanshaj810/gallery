import React from 'react';
import './painting.css';
import {Card,CardGroup} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Painting1 from '../asset/hush.jpg';
import Painting2 from '../asset/morning.jpg';
import Painting3 from '../asset/abstract1.jpg';
import Painting4 from '../asset/indian.png';
import {useHistory} from 'react-router-dom';
import {Redirect} from 'react-router-dom';



function Paintinglist()  {

const history =useHistory();

const routechange=()=>{
history.push("/filter")
}

  
    return (
        <div >
            <p className="paintlisthead">Range you can choose from</p>
            
       <CardGroup  className="paintlist">
        <Card style={{ width: '18rem' }} >
          <div className="img-wrapper">
        <Card.Img variant="top" src={Painting1} className="inner-img"/>
        </div>
        <Card.Body>
          <Card.Title>Modern</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary"  onClick={routechange}>More like this</Button>
        </Card.Body>
      </Card>
      
      
       
      
      <Card style={{ width: '18rem' }}>
      <div className="img-wrapper">
        <Card.Img variant="top" src={Painting2} className="inner-img" />
        </div>
        <Card.Body>
          <Card.Title>Nature</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary"
          onClick={routechange}
          >More like this</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
      <div className="img-wrapper">
        <Card.Img variant="top" src={Painting3} className="inner-img"/>
        </div>
        <Card.Body>
          <Card.Title>Abstract</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">More like this</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
      <div className="img-wrapper">
        <Card.Img variant="top" src={Painting4} className="inner-img"/>
        </div>
        <Card.Body>
          <Card.Title>Indian</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">More like this</Button>
        </Card.Body>
      </Card>
      </CardGroup>
      </div>
  
    );
}

export default Paintinglist;