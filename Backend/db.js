;const mongoose =require("mongoose");
module.exports=()=>{
    try{
        mongoose.connect(process.env.DB_URL);
        console.log("Connected to database successfully");
    }catch(error){
        console.log(error);
        console.log("could not connected to database");
    }
}