import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./Pages/Login"
import { Route, Routes } from "react-router-dom";
import Navlinks from "./components/Navbar/Navlinks";

function App() {
  
  return (

    <div >
      <Navlinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutpage" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;