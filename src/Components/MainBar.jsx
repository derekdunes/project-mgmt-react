import img from "../assets/no-projects.png";

const MainBar = ({ onCreateProject }) => {

    return (
        <div className="text-center">
            <img src={img} className="w-16 h-16 object-contain mx-auto" />
            <h2 className="text-xl font-bold text-stone-700 my-4">No Project Seletected</h2>
            <div>Select a Project or get started with a new one</div>
            <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 mt-8" onClick={onCreateProject} >Create new Project</button>
        </div>
    )

}

export default MainBar;