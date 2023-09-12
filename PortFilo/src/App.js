import React, { Component } from "react";
import '../src/index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Compoenets/Navbar/Navbar";
import Contact from "./Compoenets/Contact/Contact";
import Index from "./Compoenets/Index/Index";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
             <Route exact path='/' element={<Index/>} />
             <Route path='/contact' element={<Contact/>}/>
          </Routes>
          </BrowserRouter>
      
       
      </div>
    );
  }
}
export default App;
