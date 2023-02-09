import axios from "axios";
import React from "react";
import Edittodo from "./Edittodo";
import './TodoCard.css'


export const TodoCard = ({ id, title, date, task, gettodositem }) => {

    const Deletepost = () => {
        axios.delete(`http://localhost:5000/todos/${id}`);
        gettodositem();
    }
    const UpdateTodo =()=>{
        
    }

    return (
        <div className="todo-card">
            <div className="todo-card-inner">
                <div className="todos-inner-box">
                    <div className="todo-card-date">
                        <h3>{date}</h3>
                    </div>
                    <div className="todo-card-title">
                        <h2>{title}</h2>
                    </div>
                    <div className="task-outer">
                        <div className="todo-card-task">
                            <p>{task}</p>
                        </div>
                    </div>
                </div>
                <div className="todo-card-buttons">
                    <button type="submit"  onClick={UpdateTodo}>Edit</button>
                    <button type="submit" onClick={Deletepost}>Delete</button>
                </div>
            </div>
            <div className="edit-todo"id={"edit"}>
                <Edittodo id={id} gettodositem={gettodositem}/>
            </div>



        </div>
    );
}