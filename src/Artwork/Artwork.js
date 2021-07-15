import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import './Artwork.css';

export default class Artwork extends Component {
    render() {
        return (
            <div id="artworkouterdiv">
                <div id="artworkdiv">
                    <Form>
                        <h1 id="artworkh1">Galleria!!</h1>
                        <h3 id="artworkh3">Upload your Artwork</h3>
                        <Form.Group>
                            <Form.Label className="artworklabel">Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Title of the artwork" className="artworktext" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="artworklabel">Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter Price of the artwork" className="artworktext" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="artworklabel">Description</Form.Label>
                            <Form.Control as="textarea" rows={2} />
                        </Form.Group>
                        <Form.Group>
                        
                            <Form.File className="artworklabel" required Name="uploadartwork" label="Copyright Image" id="uploadartwork" feedbackTooltip />
                        </Form.Group>
                        <br/>
                        <Form.Group>
                        <Form.Label className="artworklabel">Upload Artwork</Form.Label>
                            <Form.File className="artworklabel" required Name="uploadartwork" label="Image 1 " id="uploaartworkartwork" feedbackTooltip />
                          
                            <br /> <Form.File className="artworklabel" required label="Image 2" Name="uploadaartwork" feedbackTooltip />
                            <br /> <Form.File className="artworklabel" required label="Image 3" Name="uploadaaartwork" feedbackTooltip />
                            <Button variant="primary" type="submit" className="signupbutton" onClick={(e) => this.submit(e)} >
                            Submit
                        </Button>

                        </Form.Group>

                    </Form>
                </div>
            </div>
        )
    }
}
