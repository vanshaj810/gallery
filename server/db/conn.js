const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/Galleria",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connected to mongodb");
}).catch((e)=>{
    console.log("not connected to mongodb");
})