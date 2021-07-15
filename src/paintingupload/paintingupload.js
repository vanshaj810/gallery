import { Button, Form } from 'react-bootstrap';
import React, { Component } from 'react'
import './paintingupload.css';
import {useHistory} from 'react-router-dom';
import { useState } from 'react';

export default   function Paintingupload() {
  
    const history=useHistory();

    const [newpainting, setPainting]=useState({
        name:"",
        description:"",
        image:"",
        partistname:""
      
      })
      let name, value;
    
      const takeinput=(e)=>{
        //console.log(e);
        name=e.target.name;
        value=e.target.value;
        // name=e.target.name;
        // value=e.target.value;
        // name=e.target.name;
        // value=e.target.value;
        setPainting({...newpainting,
          [name]:value,
          [name]:value,
          [name]:value
        }) 
      }


      const storepainting= async(e)=>{
        e.preventDefault();
    console.log("painting upload working");
          const{name,description,image,partistname}= newpainting;
    
           const res= await fetch("/postpaintingofmonth",{
             method:"POST",
              headers: {
                   "Content-Type": "application/json"
              },
             body:JSON.stringify({
              name,description,image,partistname
        
             })
    
           });
    
           const data= await res.json();
    
           if(data.status === 400 || !data){
             window.alert("invalid upload");
             console.log("invalid upload");
           } else{
            window.alert("upload successful");
            console.log("upload successful");
            history.push("/paintingofmonth");
           }
      } 



    
        return (
            <>
            <div id="paintingouterdiv">
                <div id="paintingdiv">
                    <Form>
                    <h1 id="paintingh1">Galleria!!</h1>
                        <h3 id="paintingh3">Painting Of The Month.</h3>
                        <Form.Group>
                            <Form.Label className="paintinglabel">Name of the Painting</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name of the Painting"  name ="name" className="paintingtext"
                             value={newpainting.name}
                             onChange={takeinput} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="paintinglabel">Description of the Painting</Form.Label>
                            <Form.Control as="textarea" rows={2} name="description"
                             value={newpainting.description}
                             onChange={takeinput}/>
                        </Form.Group> 
                                <br />

                                <Form.Group>
                            <Form.Label className="paintinglabel">Name of the Painting</Form.Label>
                            <Form.Control type="text" placeholder="Enter image url"  name ="image" className="paintingtext"
                             value={newpainting.image}
                             onChange={takeinput} />
                        </Form.Group>

                            <Form.File className="paintinglabel" required Name="painting" label="Painting" id="painting" feedbackTooltip />
                        
                            <br />
                            <Form.Group> 
                            <Form.Label className="paintinglabel">Type the Artist Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name of the Artist" name="partistname" className="paintingtext"
                             value={newpainting.partistname}
                             onChange={takeinput} />

                        </Form.Group>
                        <br/>
                        <Button variant="primary" type="submit" className="paintingbutton" onClick={storepainting} >
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            </>
        )
    
}
