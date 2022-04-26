import React, { useEffect } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import logo from './logo.svg';
import Header from './components/Header';

//import CounterClass from './components/CounterClass';
import AddOrders from './components/AddOrders';
import AllOrders from './components/AllOrders';
import EditOrders from './components/EditOrders';
import View from './components/View';


function App() {
  useEffect(() => {}, []);
  return (
    <BrowserRouter>


    <div className="App">
      <Header/>
    <Routes>
      <Route path="/add" element ={<AddOrders/>}></Route>
      <Route path="/all" element ={<AllOrders/>}></Route> 
      <Route path="/orderUpdate" element ={<EditOrders/>}></Route> 
      <Route path="/orderview" element ={<View/>}></Route> 
      
      </Routes> 

    </div>
  
    </BrowserRouter>
  );
}

export default App;
