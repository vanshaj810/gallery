const express = require("express");
require("../server/db/conn");
const Pofmonth = require("../server/db/batch");
const app= express();
const port=process.env.PORT || 4000;
//get method
app.get("/",(req,res)=>{
    res.send("hello");
})
//end get

app.use(express.json());

// post for signup 
app.post("/postpaintingofmonth",(req,res)=>{

    const p=new Pofmonth(req.body);
    if(!req.body){
        return res.status(400).send(p);
    }
    p.save();
    console.log(p);
    res.json(p);
})


//to read data for recipe
app.get("/paintingofmonth", async (req,res)=>{
   try{
       
      const gp= await Pofmonth.findById("60f02eeae1d1d008bc4472dd");
      if(!gp){
          return res.status(404).send();
      } else{
          res.send(gp);
      }
   }catch(e){
      res.status(500).send(e);
   }
})

//fo

app.listen(port,()=>{
    console.log(`connection setup at ${port}`);
})