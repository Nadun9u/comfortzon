import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getAllOrders } from "./OrderService";

export default function AllOrders(){

    const navigate = useNavigate()

    const [orders,setOrders] = useState([]);

    const [OrderSearch, setSearch] = useState("");

    useEffect(() => {
        getAllOrders().then((data) => {
           console.log("data>>", data.data.existingPosts)
            setOrders(data.data.existingPosts)
        })
    },[])

    const onDelete = (id) =>{
        alert("Going to delete" + id)
        axios.delete(`http://localhost:8000/order/delete/${id}`).then(() =>{
            alert("Delete succesfully");
        })
    };

    return(
        <div className='container'>
            <center><h1>Orders</h1></center>

            <input type="text" placeholder="Search.." name="search2" onChange={(e) =>{setSearch(e.target.value)}}style={{border:"none",

marginTop:"50px",marginBottom:"20px",

width:"40%",marginLeft:"30%",

boxShadow:" 10px 10px 5px rgba(150, 168, 156)",backgroundColor:"#b8b9bf"}}/>

        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Quentity</th>
              <th scope='col'>Colour</th>
              <th scope='col'>Email</th>
              <th scope='col'>Address</th>
              
            </tr>
          </thead>
          <tbody>
          {orders && orders.filter(value => {

            if(OrderSearch === ""){
              return value

            }else if(value.name.toLowerCase().includes(OrderSearch.toLowerCase())){

              return value
            }

          }).map((orders,index) => {
            return(
            <tr>
              <td scope='row'>{index + 1}</td>
              <td>{orders.name}</td>
              <td>{orders.quntity}</td>
              <td>{orders.colour}</td>
              <td>{orders.email}</td>
              <td>{orders.address}</td>
              
            


              
              <td>
                <a className='btn btn-warning' style={ {background:"#04AA6D"}} href='#' onClick={() => {navigate("/orderUpdate",{
                    state:{orders},
                })}}>
                  <i className='fas fa-edit'></i>&nbsp;Edit
                </a>
                &nbsp;
                <a className='btn btn-danger' onClick={() => onDelete(orders._id)}>
                  <i className='fas fa-trash-alt'></i>&nbsp;Delete
                </a>
                &nbsp;
                <a className='btn btn-primary' href="" onClick={() => {navigate("/orderview",{
                    state:{orders},
                })}}>
                  <i className="fa-solid fa-eye"></i>&nbsp;View
                </a>
              </td>
            </tr>
            );
          })}
          </tbody>
        </table>
        <button className='btn btn-success'><a href='/add' style={{textDecoration:'none', color:'white'}}>Create New Orders</a></button>
        
    
      </div>
    )
}

