import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import data from "./data";
import Projectvideos from "./pages/Projectvideos";
import Login from "./pages/Login";
import Signup from "./pages/Signup";



const App = () => {
  const[IsLoggedIn,setIsLoggedIn]=useState(false);

  return (
    <div className="h-screen w-screen bg-black overflow-x-hidden overflow-y-hidden">
      <Navbar className="h-24 w-full" IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>


      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/project" element={<Project data={data}/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projectvideos" element={<Projectvideos/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>


  );
};

export default App;
