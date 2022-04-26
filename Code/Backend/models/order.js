const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const Schema = mongoose.Schema;

const orderSchema = new Schema({

    name : {
        type : String,
        required: true
    },
    quentity:{
        type: Number,
        required:true
    },
    colour:{
        type:String,
        required:true
    },  
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

const order = mongoose.model("order",orderSchema);

module.exports = order;