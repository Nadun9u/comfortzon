import axios from "axios";



const HOST = "http://localhost:8000/"


export const  getAllOrders = async () =>{

    try{

        const response = await axios.get(`${HOST}order/read`)

        return response

    }catch(error){

        console.log("error while retrieving data",error)

        return false;

    }
}