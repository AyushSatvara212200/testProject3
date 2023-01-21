const express = require('express');
const port = 9000;
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const userModel = require('./models/user.model');

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin@cluster0.lptfhbe.mongodb.net/CH");

// app.post("/insert" , (req,res)=>{
    
// })

app.listen(process.env.PORT || 9000, () => {
    console.log(`You are connected to port ${port}`)
})