import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Edittodo({id,gettodositem,title, date, task}){
    // const [todos, settodos] = useState([]);
    const [todotitle, settodotitle] = useState("");
    const [todotask, settodotask] = useState("");
    const [tododate, settododate ] = useState(" ");
    // const {id} = useParams(); 

    useEffect(()=>{
        axios.get("http://localhost:5000/todos/"+id).then((res)=>{
           settodotitle(res.data.title);
           settodotask(res.data.task);
           settododate(res.data.date);
        }).then((rep)=>{
            gettodositem(rep);
        }).catch((err)=>{
            console.log(err.message);
        })
    },[]);
        
    const submit = (e) =>{
        e.preventDefault();
        axios.put("http://localhost:5000/todos/"+id,{
            date:tododate,
            title:todotitle,
            task:todotask,
        }).then((res)=>{
            alert("edited Succesfully");
            window.location.reload(true)
            gettodositem(res)
        }).catch((err)=>{
            console.log(err.message);
        })
    }

    return(
        <div className="outer-container">
            <h1> Edit To-Do's</h1>
            <div className="form-box">
                <form onSubmit={(e)=>submit(e)}>
                <input type={"date"} 
                    placeholder={"Date.."} 
                    value={tododate}
                    onChange={(e)=>{settododate(e.target.value)}}/>

                    <input type={"text"} 
                    placeholder={"Enter your title.."}
                    value={todotitle} 
                    onChange={(e)=>{settodotitle(e.target.value)}} />

                    <input type={"text"} 
                    placeholder={"Enter your task.."} 
                    value={todotask}
                    onChange={(e)=>{settodotask(e.target.value)}}/>

                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    );
}