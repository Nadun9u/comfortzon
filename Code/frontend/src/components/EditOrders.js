import React, {useEffect, useState} from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function EditOrders(){
    const {state} = useLocation();

    const [name, setName] = useState("");
    const [quentity, setQuentity] = useState("");
    const [colour, setColour] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState(" ");
    const [editedOrderID,setEditedOrderID] =useState("");
    


    useEffect(() =>{
        setName(state.orders.name)
        setQuentity(state.orders.quentity)
        setColour(state.orders.colour)
        setEmail(state.orders.email)
        setAddress(state.orders.address)
        setEditedOrderID(state.orders._id)
        
       
    },[])

    function sendOrder(e){
        e.preventDefault();
        alert("Going to Add New Order");

        const newOrder = {
            name,
            quentity,
            colour,
            email,
            address,
            
        }
        
        

        /*url*/
        axios.put(`http://localhost:8000/order/orderUpdate/${editedOrderID}`, newOrder).then(() =>{
            alert("Order Updated");
        }).catch((err) =>{
            alert(err)
            console.log(err);
        })
    }

    return(
        <>
        <h1 style={{color: 'black' , fontWeight: 'bold' , borderRadius: '8px', fontFamily: '"Times New Roman", Times, serif',  textAlign: 'center'}}>Update Order</h1>
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