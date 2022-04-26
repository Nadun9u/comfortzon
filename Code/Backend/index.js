const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require("body-parser");
const dotenv = require ("dotenv");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT||8000


//app middleware
dotenv.config();
app.use(cors());
app.use(bodyParser.json());


mongoose.connect(process.env.DB_URL, {
    //useCreateIndex: true, 
    //useFindAndModify: false, 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("🚀 DB connected successfully");
});

const orderRouter = require("./routes/order.js");

http://localhost:8000/order

app.use("/order",orderRouter)
//import routes


//ERROR
//http://localhost:8000/payment



 /* app.get("/getfinanceModel", (req, res) => {
    financeModel.find({}, (err, result) => { 
      
      if (err){
    res.json(err);
        
      } else {
    res.json(result);
    
      }
    
    });
    
    });*/


app.listen(PORT,() => {
  console.log(`Server is started on port ${PORT}`);
});
