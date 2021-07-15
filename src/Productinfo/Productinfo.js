import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import CheckIcon from '@material-ui/icons/Check';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import '../Productinfo/Productinfo.css';
import { Button, Image } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
function Productinfo() 
{
    const history =useHistory();

    const routechange=()=>{
    history.push("/profile")
    }


    return (
        <div className="pdiv">
        <Container className="pcontainer">
        <Row>
          <Col xs={8} className="leftp">
                        <Carousel fade  prevLabel='' nextLabel=''>
                <Carousel.Item>
                    <img
                    className="carimg"
                    src="https://th.bing.com/th/id/OIP.W8apTKARTqVhmLzMCisNmAHaEs?pid=ImgDet&rs=1"
                    alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="carimg"
                    src="https://th.bing.com/th/id/R892bb645c09c766efcc5bc4d0c93094a?rik=slmcvUaa5yToAw&riu=http%3a%2f%2fwww.wallpapers13.com%2fwp-content%2fuploads%2f2015%2f12%2fNature-Lake-Bled.-Desktop-background-image.jpg&ehk=c2raFC95S12P3OL0%2fwdM60ro3oUxsSEajkuGEN%2fsjbo%3d&risl=1&pid=ImgRaw"
                    alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="carimg"
                    src="https://objectif-image.fr/OI/wp-content/uploads/2016/03/solitude3.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                
                </Carousel>
          </Col>
          <Col className="rightp">
              <h1 className="paintingname">Painting Name</h1>
              <p className="partist">Artist Name</p>
              <p className="pcommon">About artwork</p>
              <p className="pcommon">Material used</p>
              <p className="pcommon">Dimension</p>
              <p className="pcommon">Year of creation</p>
              <div className="addtocart">
                 <p className="pprice"> $Price</p>
                    <Button className="pbtn"><AddShoppingCartSharpIcon /></Button>
              </div>
              <p className="pcommon">Shipping included<CheckIcon/></p>
          </Col>
        </Row>
      </Container>
      <Container className="downcontainer">
          <Row className="downp">
              <Col >
                  <Image className="pimg" roundedCircle src="https://th.bing.com/th/id/R429c301794e023c12451e852be450077?rik=YrCO5oRnWKBg8g&riu=http%3a%2f%2fthenewcode.com%2fassets%2fimages%2fvanishing-point-2x.jpg&ehk=Hvh%2bHhAQnaz6h7SoR%2fyHFJO1xy8KoeWMxmdLAG%2fn6VY%3d&risl=&pid=ImgRaw"/>
                  <h2 className="aname">Name of artist</h2>
                  <Button onClick={routechange}>View profile</Button>
              </Col>
          </Row>
          <Row className="ddownp">
              <Col>Artist Statement</Col>
          </Row>
      </Container>
      </div>
    )
}

export default Productinfo
