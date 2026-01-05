import img from "../assets/no-projects.png";
import Button from './LiteComponents/Button.jsx'

const MainBar = ({ onCreateProject }) => {

    return (
        <div className="mt-24 text-center">
            <img src={img} className="w-16 h-16 object-contain mx-auto" />
            <h2 className="text-xl font-bold text-stone-700 my-4">No Project Seletected</h2>
            <p className="text-stone-400 mb-4">Select a Project or get started with a new one</p>
            <p className="mt-8">
            <Button onClick={onCreateProject}>
                Create new Project
            </Button>
            </p>
        </div>
    )

}

export default MainBar;