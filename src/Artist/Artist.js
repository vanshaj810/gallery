import { Button } from 'react-bootstrap';
import React from 'react';
import { Card, CardGroup, Image } from 'react-bootstrap';
import '../Artist/Artist.css';

function Artist() {
    return (
        <div className="artistdiv">
            <CardGroup>
                <div>
            <Card className="artistcard" border="light">
                <Image roundedCircle className="artistimage" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Dalian%2C_China%2C_satellite_image%2C_LandSat-5%2C_2010-08-03.jpg/1099px-Dalian%2C_China%2C_satellite_image%2C_LandSat-5%2C_2010-08-03.jpg" />
                <Card.Body>
                <Card.Title className="artistname">Artist Name</Card.Title>
                <Card.Title className="artistname">Type of work</Card.Title>
                <Button className="artistbutton">View Profile</Button>
                </Card.Body>
            </Card>
            </div>
            <div>
            <Card className="artistcard" border="light" >
                <Image roundedCircle className="artistimage" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Dalian%2C_China%2C_satellite_image%2C_LandSat-5%2C_2010-08-03.jpg/1099px-Dalian%2C_China%2C_satellite_image%2C_LandSat-5%2C_2010-08-03.jpg" />
                <Card.Body>
                <Card.Title className="artistname">Artist Name</Card.Title>
                <Card.Title className="artistname">Type of work</Card.Title>
                <Button  className="artistbutton">View Profile</Button>
                </Card.Body>
            </Card>
            </div>
            <div>
            <Card className="artistcard" border="light">
                <Image roundedCircle className="artistimage" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Dalian%2C_China%2C_satellite_image%2C_LandSat-5%2C_2010-08-03.jpg/1099px-Dalian%2C_China%2C_satellite_image%2C_LandSat-5%2C_2010-08-03.jpg" />
                <Card.Body>
                <Card.Title className="artistname">Artist Name</Card.Title>
                <Card.Title className="artistname">Type of work</Card.Title>
                <Button  className="artistbutton">View Profile</Button>
                </Card.Body>
            </Card>
            </div>
            <div>
            <Card className="artistcard" border="light" >
                <Image roundedCircle className="artistimage" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Dalian%2C_China%2C_satellite_image%2C_LandSat-5%2C_2010-08-03.jpg/1099px-Dalian%2C_China%2C_satellite_image%2C_LandSat-5%2C_2010-08-03.jpg" />
                <Card.Body>
                <Card.Title className="artistname">Artist Name</Card.Title>
                <Card.Title className="artistname">Type of work</Card.Title>
                <Button className="artistbutton">View Profile</Button>
                </Card.Body>
            </Card>
            </div>
            <div>
            <Card className="artistcard" border="light" >
                <Image roundedCircle className="artistimage" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Dalian%2C_China%2C_satellite_image%2C_LandSat-5%2C_2010-08-03.jpg/1099px-Dalian%2C_China%2C_satellite_image%2C_LandSat-5%2C_2010-08-03.jpg" />
                <Card.Body>
                <Card.Title className="artistname">Artist Name</Card.Title>
                <Card.Title className="artistname">Type of work</Card.Title>
                <Button className="artistbutton">View Profile</Button>
                </Card.Body>
            </Card>
            </div>
            </CardGroup>
        </div>
    )
}

export default Artist
