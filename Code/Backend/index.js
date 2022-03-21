const express = require ("express");
const mongoose = require ("mongoose");
const dotenv = require ("dotenv");

const app = express();
dotenv.config();

const PORT = process.env.PORT||8000

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
  });
  const connection = mongoose.connection;
  connection.once("open", () => {
   console.log("DB connected successfully");
  });


app.listen(PORT,() => {console.log("Server is started")} )
