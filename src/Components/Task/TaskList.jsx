const TaskList = ({ projectIndex, project, deleteTask }) => {

    const tasks = project.tasks;

  return (
    <>
      {tasks.length <= 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task, taskIndex) => {
            return (
              <li className="flex justify-between my-4" key={taskIndex}>
                <div>{task}</div>
                <button 
                    onClick={() => deleteTask(projectIndex, taskIndex)}
                    className="text-stone-800 hover:text-stone-950">
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default TaskList;
