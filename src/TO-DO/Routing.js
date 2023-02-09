import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Editbook from "../Books/Editbooks/Editbook";
import { TodoFeed } from "./TodoFeed";


export const Routing = () =>{
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/add" element={< TodoFeed />} />
                    <Route path="/edit/:id" element={<Editbook />} />
                </Routes>
            
            </BrowserRouter>
        </div>
    );
}