const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express(); 
require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.DB_URL;

mongoose.connect(URL,{
  //  useCreateIndex: true,
    useNewUrlParser: true,
 //S   useUnifiedTopologyL:true,
    useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open",() => {
    console.log("Mongodb Connection success!");
});

app.listen(PORT, () => {
    console.log('Server is up and running on port number: 8070 ${PORT}')
})