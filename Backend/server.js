require('dotenv').config()
const express=require('express');
const bodyParser=require('body-parser')
const connectWithDB=require('./db');;
const cors=require('cors');

connectWithDB();

const app=express();
app.use(bodyParser.json());
app.use(cors())

app.use('/products',require('./Routes/Product'));

app.listen(process.env.PORT ||3000,(error)=>{
    if(error){
        console.log("Error in connecting to server");
    }
    console.log('Server connected successfully')
});