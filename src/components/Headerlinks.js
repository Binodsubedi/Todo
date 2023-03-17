import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Add from "./Add";
import Todos from "./TODOS";
import NotFound from "./NotFound";


const Headerlinks = ()=>{
    return (<header className="headers">
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Todos/>}></Route>
            <Route path="/add" element={<Add/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>

        </Routes>
        
        </BrowserRouter>
        </header>);
}

export default Headerlinks;