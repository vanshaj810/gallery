import React,{useState} from 'react';
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import { Button,Card, CardGroup, Image } from 'react-bootstrap';
import "./Filter.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useHistory } from 'react-router';


const Menu = () => {

    const history =useHistory();

const routechange=()=>{
history.push("/paintinginfo")
}

    const Menu = [

     
        {
            id: 1,
            image: "https://cdn.shopify.com/s/files/1/1903/8473/articles/how-to-choose-the-right-canvas-for-oil-or-acrylic-painting-404164.jpg?v=1563476962",
            name:"Acrylics",
            category: "Acrylics",
            
        },

        {
            id: 2,
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/770bd2fb-9caf-459d-b2db-3951e9edc314/dcxwg1k-1d4d4be9-29e3-4bd5-b62d-bb1cf68e82a1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3MGJkMmZiLTljYWYtNDU5ZC1iMmRiLTM5NTFlOWVkYzMxNFwvZGN4d2cxay0xZDRkNGJlOS0yOWUzLTRiZDUtYjYyZC1iYjFjZjY4ZTgyYTEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.plLWLK58cO0RmT33LFCvFrHUhNnSWu_9qsKTZ2W74J0",
            name:"Oil",
            category: "Oils",
            
        },
     

       {
        id: 3,
        image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/alcohol-ink-flower-femina-photo-art-by-maggie.jpg",
        name:"Alcohol",
        category: "Alcohol",
        
       },
    
       {
        id: 4,
        image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        name:"Others",
        category: "Others",
       
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        name:"Others",
        category: "Others",
       
      },
        

    
    ];



    const [items, setItems] = useState(Menu);
    
    const filterItem = (categItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }

    return (
        <> 
         <div className="menu-class">
            <h2>OUR PAINTINGS</h2>
            
            
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    <Button className="filterbutton" onClick={() => filterItem('Acrylics')}>Acrylics</Button>
                    <Button className="filterbutton" onClick={() => filterItem('Oils')}>Oils</Button> 
                    <Button className="filterbutton" onClick={() => filterItem('Alcohol')}>Alcohol Ink</Button>
                    <Button className="filterbutton" onClick={() => filterItem('Others')}>Others</Button>
                    <Button className="filterbutton" onClick={() => setItems(Menu)}>All</Button>
                </div>
            </div>

            



            <div className="menu-items ">
                
                    
            <CardGroup >
                            
                            {  
                                items.map((elem) => {
                                    const { id, name, image,  price } = elem;

                                    return (
                                    
                                        <div key={id} className="menu-div" >
                                    
                                    <Card border="light" className="menu-card" >
                                        
                                    <Image className="menu-img" variant="top" src={image} alt={name}/>
                                    <Card.Body>
                                      <Card.Title className="paintingnamefilter" >{name}</Card.Title>
                                      <Card.Text>
                                       {price}
                                      </Card.Text>
                                      <Button className="filteraddbtn" onClick={routechange} >View details</Button>
                                    </Card.Body>
                                  </Card>
                                  

                                  </div>
                                        
                                        
                                    )
                                })
                        }

                             
                        
                   
                        </CardGroup>
            </div>
            </div>
        </>
    )
}

export default Menu
