import React from "react";

const FilterButtons = ({setFilter}) => {

    return(
        <div className="flex justify-around m-4">
            <button onClick={()=> setFilter('all')} 
                className="ml-2 bg-purple-500 text-white px-2 py-1 rounded-lg hover:bg-purple-600">all</button>
            <button onClick={()=> setFilter('completed')}
                className="ml-2 bg-purple-500 text-white px-2 py-1 rounded-lg hover:bg-purple-600">completed</button>
            <button onClick={()=> setFilter('incomplete')}
                className="ml-2 bg-purple-500 text-white px-2 py-1 rounded-lg hover:bg-purple-600">incomplete</button>
        </div>
    );
}

export default FilterButtons;