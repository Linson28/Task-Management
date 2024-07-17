import React from "react";
import ToDoItem from './ToDoItem'

function ToDoList ({todos , toggletodo , removetodo}){

    return(
        <ul className="space-y-2">
            {todos.map((todo) => (
                <ToDoItem key = {todo.id} todo = {todo} removetodo={removetodo} toggletodo = {toggletodo}/>              
            ))}
        </ul>
    );
}

export default ToDoList;