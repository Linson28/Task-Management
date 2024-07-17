import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList'

function App(){

  const [todos , setTodos] = useState([]);

  const removetodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  
  const addtodo = (Text) => {
    const newTodo = {id : Date.now(), Text : Text , completed : false}
    setTodos([...todos , newTodo]);
  }

  const toggletodo = (id) => {
    setTodos(todos.map((todo) => (
      todo.id === id ? {...todo , completed : !todo.completed } : todo
     )));
  }

  return(
    
  <div className="min-h-screen bg-grey-100 flex items-center justify-center">
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md ">
      <h1 className="text-center font-bold text-2xl mb-4">To-Do List</h1>
      <ToDoForm addtodo = {addtodo} />
      <ToDoList todos = {todos} toggletodo = {toggletodo} removetodo = {removetodo}/>
    </div>
  </div>
  );
}

export default App;
