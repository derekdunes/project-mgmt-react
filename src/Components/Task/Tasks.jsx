import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

const Tasks = (props) => {
  return (
    <>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <CreateTask {...props}/>
      <TaskList {...props} />
    </>
  );
};

export default Tasks;
