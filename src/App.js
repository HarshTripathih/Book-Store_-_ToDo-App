import React, { useState } from 'react'
import './App.css'
import Routing from './Books/Routing'


import { TodoCard } from './TO-DO/TodoCard'
import { TodoFeed } from './TO-DO/TodoFeed'




//browser storages like local storage, session storage, cookies, index db.

//session storage
//storage that is available during the page session
//stores data only for that session
//data is never transferred to the server
//storage limit is higher cookies (5 mb limit)

//local storage
//the data is persited even when the browser is closed 
//it has no expiration date
//clear the data through js
//5 mb 

//save the data in session storage

// sessionStorage.setItem('sports', 'football')

// //get the saved data from session storage

// console.log(sessionStorage.getItem('sports'))

// //remove the saved data from the session storage

// sessionStorage.removeItem('sports')

//sessionStorage.clear()




// localStorage.setItem('key','value')
// localStorage.getItem('key')
// localStorage.removeItem('key')
// localStorage.clear()

//only strings can be stored in local or session storage




function App() {
  // const [todoText, setTodoText] = useState("")
  // const [todoList, setTodoList] = useState([])


  // console.log(todoList)
  // const handleInputChange = (event) => {
  //   setTodoText(event.target.value)
  // }

  // const handleFormSubmit = (event) => {
  //   event.preventDefault()
  //   if (todoText == '') return
  //   let copyTodoList = [...todoList]
  //   copyTodoList.push(todoText)
  //   setTodoList(copyTodoList)
  //   setTodoText('')

  // }

  return (
    <div className='app'>
      {/* <div className='app-header'>
        <h1>TO DO APP</h1>
      </div>
      <form onSubmit={handleFormSubmit} >
        <label className='todoLabel'>What do you want to do today?</label>
        <br /> <br />
        <br />

        <input className='input' type='text' value={todoText} onChange={handleInputChange} />
        <button className='button'>Submit</button>
      </form>
      <table>

        <tbody>

          {
            todoList.map((todo, index) => (
              <tr>
                <td>    <input type='checkbox' /></td>
                <td>              <h4>{todo} </h4>
                </td>
                <td>            <button>Delete</button>
                </td>
              </tr>





            ))
          }
          
        </tbody>
      </table> */}
      <Routing />
      <TodoFeed/>
   
     
  


    </div>
  )
}

export default App
























// import './App.css';
// import TaskScreen from './screens/TaskScreen';

// function App() {
//   return (
//     <div>
//       <h1>Welcome to To Do List Application.</h1>
//       <TaskScreen /> {/* This is like a function call */}
//     </div>
//   );
// }

// export default App;





// What is a React Component?

// A React Component is LIKE a function.
// It takes in zero or a few arguments.
// It always returns some UI in form of JSX.
// A React Component can be represented by a JS class or a JS function.

// JSX -> JavaScript XML
// It is like HTML, but it also supports React Components
// You can also write JS code inside JSX.