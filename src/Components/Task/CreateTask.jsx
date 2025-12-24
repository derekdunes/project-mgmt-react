import { useRef, useState } from "react";

const CreateTask = ({ projectIndex, AddTask }) => {

    const inputRef = useRef();

    function handleNativeAddTask(){
        const task = inputRef.current.value;

        if(!!task && task.trim().length !== 0) {
            inputRef.current.value = "";
            AddTask(projectIndex, task);
        }
    }

    return (
        <p className="text-stone-800 my-4">
            <input 
                ref={inputRef}
                className="w-64 px-2 py-1 rounded-sm bg-stone-200 mr-2" />
            <button 
                onClick={() => handleNativeAddTask()}
                className="text-stone-700 hover:text-stone-950">Add Task</button>
        </p>
    )

}

export default CreateTask;