import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import Hotel from "./components/Hotel";
import Login from "./components/Login";


const App = () =>{
    return (
   
        <>
          <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/hotels" element={<List/>} />
                    <Route path="/hotels/:id" element={<Hotel/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="*" element={<Home/>} />
                </Routes>
          </BrowserRouter>

        </>


    );
}
export default App;