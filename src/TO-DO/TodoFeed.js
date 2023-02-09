import axios from "axios";
import React, { useState, useEffect } from "react";
import { TodoCard } from "./TodoCard";
import './TodoFeed.css';


export const TodoFeed = () => {
    const [todos, settodos] = useState([]);
    const [todotitle, settodotitle] = useState("");
    const [todotask, settodotask] = useState("");
    const [tododate, settododate ] = useState(" ");
    

    async function gettodositem(){
        const response = await fetch('http://localhost:5000/todos');
        const data = await response.json();
        settodos(data);
    }
    useEffect(()=>{
        gettodositem();
    },[]);

    const posttodotask = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:5000/todos',{
            title:todotitle,
            task:todotask,
            date:tododate
        }).then((res)=>{
            alert("New Todo is Added");
            window.location.reload(true);
        })
        .then(resp=>{
            console.log(resp.books)
        })


        // const copytododata = [ ...todos ]
        // copytododata.unshift({
        //     id:todotitle,
        //     title:todotask,
        // })
        // settodos(copytododata);
        // settodotitle('');
        // settodotask('');

    }
    


    


    return (
        <div className="outer-container">
            <h1>Welcome to To-Do's Application</h1>
            <div className="form-box">
                <form >
                <input type={"date"} 
                    placeholder={"Date.."} 
                    value={tododate}
                    onChange={(e)=>settododate(e.target.value)}/>

                    <input type={"text"} 
                    placeholder={"Enter your title.."}
                    value={todotitle} 
                    onChange={(e)=>settodotitle(e.target.value)} />

                    <input type={"text"} 
                    placeholder={"Enter your task.."} 
                    value={todotask}
                    onChange={(e)=>settodotask(e.target.value)}/>

                    <button onClick={posttodotask}>Add</button>
                </form>
            </div>
            <div className="todo-maping-data">
                {todos?.map((value)=>(
                    <TodoCard 
                    key={value.id}
                    title={value.title}
                    task={value.task}
                    date={value.date}
                    id={value.id}
                    gettodositem={gettodositem}
                    />
                ))}
            </div>
        </div>
    );
}
