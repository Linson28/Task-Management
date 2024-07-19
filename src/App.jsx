import React, { useEffect, useMemo, useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList'
import FilterButtons from './FilterButtons';

function App(){

  const [todos , setTodos] = useState([]);
  const [filter , setFilter] = useState('all');

  useEffect( () => {
    localStorage.setItem('Todos', JSON.stringify(todos) );
  } , [todos])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('Todos'));
    if(storedTodos){
      setTodos(storedTodos);
    }
  } ,[] );

  const filterdTodos = useMemo(() => {
    switch(filter) {
      case 'completed' :
        return todos.filter(todo => todo.completed )
      case 'incomplete' :
        return todos.filter((todo) => {
          return !todo.completed})
      default:
        return todos;
    }
  },[todos , filter]);


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
      <FilterButtons setFilter = {setFilter}/>
      <ToDoList todos = {filterdTodos} toggletodo = {toggletodo} removetodo = {removetodo}/>
    </div>
  </div>
  );
}

export default App;
