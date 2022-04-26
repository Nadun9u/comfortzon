const router = require("express").Router();
const order = require("../models/order");
const {update} =  require("../models/order");

//http://localhost:8000/order/add

router.route("/add").post((req,res) =>{

    const name = req.body.name;
    const quentity = Number(req.body.quentity);
    const colour =req.body.colour;
    const email = req.body.email;
    const address = req.body.address;

    const newOrder = new order({

        name,
        quentity,
        colour,
        email,
        address
    })

    newOrder.save().then(()=>{
        res.json("Order Added")

    }).catch((err)=>{
        console.log(err);
    })
})

//http://localhost:8000/order

/*
router.route("/").get((req,res) =>{


    order.find().then((order)=>{

        res.json(order)
    }).catch((err)=>{
        console.log(err)
    
    })
*/

router.get('/read',(req,res)=>{

    order.find().exec((err,order)=>{

        if(err){

            return res.status(400).json({

                error:err

            });



        }

        return res.status(200).json({

            success:true,

            existingPosts:order

        });

    });

});


//http//localhost:8000/order/update

/*router.route("/update/:id").put(async (req,res) =>{

    let userId = req.params.id;
    const{name,quentity,colour,email,address} = req.body;

    const updateOrder = {
        name,
        quentity,
        colour,
        email,
        address 
    }
    const update = await order.findByIdAndUpdate(userId,updateOrder)
    .then(() =>{
    res.status(200).send({status: "User updated",user: update})
}).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data"});
})
})
*/

router.put('/orderUpdate/:id',(req,res)=>{ order.findByIdAndUpdate(req.params.id,{$set:req.body},(err,update)=>{
    if(err){
     return res.status(400).json({error:err});
     }


     return res.status(200).json({
        success:"Details Update Successfuly" });
    
    } );});



router.route("/delete/:id").delete(async (req,res) =>{
let userId = req.params.id;

await order.findByIdAndDelete(userId)
.then(() => {
    res.status(200).send({status:"User deleted"});
}).catch((err) => {
    console.log(err.message);
    res.status(500).send({status: "Error with delete user", error:err.message});
})
})


//http://localhost:8000/salary/getsalary/:id



router.get("/getorder/:id", (req,res) =>{

    let userId = req.params.id;



    order.findById(userId,(err,orders) => {

        if(err){

            return res.status(400).json({success:false, err});

        }



        return res.status(200).json({

            success:true,

            orders

        })

    })

})

module.exports = router;