import Button from './LiteComponents/Button.jsx';

const SideBarHeader = ({ onCreateProject }) => {

    return (
        <>
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
                YOUR PROJECTS
            </h2>

            <Button onClick={onCreateProject}>
                + Add Project
            </Button>
        </>
    )
}

export default SideBarHeader;