import React from 'react';
import '../Profile/Profile.css';
import { Col, Container, Image, Row } from 'react-bootstrap';

function Profile() {
    return (
        <div className="profilediv">
       
       
            <Container className="profilecontainer">
                <Row>
                    <Col xs={3}>
                    <Image className="aimg" roundedCircle src="https://resources.stuff.co.nz/content/dam/images/1/f/5/4/7/w/image.related.StuffLandscapeSixteenByNine.1420x800.1gqntz.png/1485130907346.jpg"/>
                    </Col>
                    <Col className="rightcol">
                    <p className="profilecommon">Artist Name</p>
                    <Image className="flag" src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"/>
                    <p className="profilecomm">Artist Statement</p>
                    </Col>
                </Row>
            </Container>
        </div>
       
    )
}

export default Profile
