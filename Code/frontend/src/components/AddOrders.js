import React, {useState} from "react";
import axios from "axios"
//import App  from "../App ";
//import './AddPaymentForm.css'

export default function AddOrders(){

    //Create State
    const [name, setName] = useState(" ");
    const [colour, setColour] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [quentity, setQuentity] = useState(" ");
    const [address, setAddress] = useState(" ");


    


    function sendOrder(e){
        e.preventDefault();
        alert("Add New Oder");

        const newOrder = {
          name,
          quentity,
          colour,
          email,
          address
        }
        
        axios.post("http://localhost:8000/order/add", newOrder).then(()=>{
            alert("Order Added");


        }).catch((err)=>{
            alert(err)
            console.log(err);
        })
    }

  /*  return(
        <form className="container" onSubmit={sendOrder}>
            
            <div className="mb-3">
                <label for="customerCode" className="form-label">Name</label>
                <input type="text" className="form-control" id="fullName" placeholder="Name"  onChange={(e)=>{
                    setName(e.target.value);
                }}/>
            </div>
            <div className="mb-3">
                <label for="quentity" className="form-label">Quentity</label>
                <input type="number" className="form-control" id="quentity"  placeholder="Quentity" onChange={(e)=>{
                    setQuentity(e.target.value);
                }}/>
            </div>
            <div className="mb-3">
                <label for="colour" className="form-label">Colour</label>
                <input type="text" className="form-control" id="email"  placeholder="Colour" onChange={(e)=>{
                    setColour(e.target.value);
                }}/>
            </div>
            <div className="mb-3">
                <label for="oderID" className="form-label"ID>Email</label>
                <input type="email" className="form-control" id="email" placeholder="Email"  onChange={(e)=>{
                    setEmail(e.target.value);
                }}/>
            </div>
             <div className="mb-4">
                <label for="address" className="form-label"ID>Address</label>
                <input type="address" className="form-control" id="address" placeholder="Address"  onChange={(e)=>{
                    setAddress(e.target.value);
                }}/>   
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );*/



    return(
        <>
        <h1 style={{color: 'black' , fontWeight: 'bold' , borderRadius: '8px', fontFamily: '"Times New Roman", Times, serif',  textAlign: 'center'}}>Oder Details</h1>
        <form  className="container" style={{width:'700px' ,background: '#fcfcde', borderRadius: '8px', padding: '10px', color: 'black'}} onSubmit={sendOrder}>
            <div style={{border:"2px" ,border: '2px', borderRadius: '5px',padding: '5px'}} className="mb-3">
                <label for="employeeName" className="form-label" style={{fontWeight: 'bold'}}> Name</label>
                <input style={{borderBottom: '6px solid blue'}} type="text" className="form-control" id="employeeName" autoComplete="off" value={name} 
                onChange={(e)=>{
                    setName(e.target.value);}}
                />
            </div>
            <div style={{border:"2px" ,border: '2px', borderRadius: '5px',padding: '5px'}} className="mb-3">
                <label for="nic" className="form-label" style={{fontWeight: 'bold'}}>Quentity</label>
                <input style={{borderBottom: '6px solid blue'}} type="Number" className="form-control" id="nic" autoComplete="off" value={quentity} 
                onChange={(e)=>{
                    setQuentity(e.target.value);}}
                />
            </div>
            <div style={{border:"2px" ,border: '2px', borderRadius: '5px',padding: '5px'}} className="mb-3">
                <label for="employeeEmail" className="form-label" style={{fontWeight: 'bold'}}>Colour</label>
                <input style={{borderBottom: '6px solid blue'}} type="text" className="form-control" id="employeeEmail" placeholder="Employee Email" autoComplete="off" value={colour}
                onChange={(e)=>{
                    setColour(e.target.value);}}
                />
            </div>
            <div style={{border:"2px" ,border: '2px', borderRadius: '5px',padding: '5px'}} className="mb-3">
                <label for="salaryDate" className="form-label" style={{fontWeight: 'bold'}}>Email</label>
                <input style={{borderBottom: '6px solid blue'}} type="email" className="form-control" id="salaryDate" autoComplete="off" value={email} onChange={(e)=>{
                    setEmail(e.target.value);}}
                />
            </div>
            <div style={{border:"2px" ,border: '2px', borderRadius: '5px',padding: '5px'}} classNam="mb-3">
                <label for="basicSalary" className="form-label" style={{fontWeight: 'bold'}}> Address</label>
                <input style={{borderBottom: '6px solid blue'}} type="text" className="form-control" id="basicSalary" autoComplete="off" value={address} onChange={(e)=>{
                    setAddress(e.target.value);}}
                />
            </div>
            
            <div className="form-group form-button">
                    <button type="submit" class="btn btn-primary">Update</button>
            </div>
        </form>
        </>          
    )
}
