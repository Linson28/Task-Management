import React , {useState} from "react";

function ToDoForm({addtodo}){
    
    const [text , setText ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
            if(text){
              addtodo(text);
              setText('');
            }
      }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type = "text" value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="add a new task"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                ></input>
            <button type = "submit" className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"> add </button>
            </form>
        </div>   
    );
};

export default ToDoForm;