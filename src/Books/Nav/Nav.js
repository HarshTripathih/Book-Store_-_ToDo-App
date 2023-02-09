import React from "react";
import './Nav.css'
import { Link } from "react-router-dom";

export default function () {
    return (
        <div className="nav-box">
            <div className="left-side-nav">
                <h1>BOOKS LIBRARY PORTAL</h1>
            </div>
            <div className="right-side-nav">
                <ul>
                   
                    <li className="active"><a href="/">Home</a></li>
                    <li><a href="" >About </a></li>
                    <li><a href="" >Services</a></li>
                    <li><a href="" >Books</a></li>
                    <li><a href="/addbook" >Addbooks</a></li>
                
                </ul>
            </div>
        </div>
    );
}