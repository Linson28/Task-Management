import React from "react";

const ToDoItem = ({todo , toggletodo , removetodo}) => {
    return(
        <li className="flex justify-betweeen items-center bg-grey-200 rounded-lg p-3">
            
            <span className={`flex-1 ${todo.completed ? 'line-through' : 'none'}`}> {todo.Text} </span>
            <button onClick={() => toggletodo(todo.id)} className="ml-2 bg-green-500 text-white px-2 py-1 rounded-lg hover:bg-green-600" > 
                {todo.completed ? "undo" : "completed"}</button>
            <button onClick={() => removetodo(todo.id)} className="ml-2 bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600" > remove </button>
        </li>
    );
        
}

export default ToDoItem;