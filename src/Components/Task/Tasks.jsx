import CreateTask from './CreateTask'
import TaskList from './TaskList';

const Tasks = () => {

    return (
        <>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <CreateTask />
            <TaskList />
        </>
    )

}

export default Tasks;