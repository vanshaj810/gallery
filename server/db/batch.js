const mongoose=require("mongoose");
//const validator= require("validator");

const pofmonth =new mongoose.Schema({
  name:{
      type:String,
      required:true
  },
  description:{
      type:String,
      required:true
     
  },
  image:{
      type:String,
      required:true
      
  },
  partistname:{
      type:String,
      required:true
  }
})
//new collection
 const Pofmonth =new mongoose.model('Pofmonth',pofmonth);

 module.exports=Pofmonth;

 