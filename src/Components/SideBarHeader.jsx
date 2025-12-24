const SideBarHeader = ({ onCreateProject }) => {

    return (
        <>
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
                YOUR PROJECTS
            </h2>

            <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={onCreateProject}>
                + Add Project
            </button>
        </>
    )
}

export default SideBarHeader;