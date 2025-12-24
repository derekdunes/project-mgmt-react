import Tasks from "./Task/Tasks"
import Project from "./Project"

const ProjectDetails = (props) => {

    return (
        <>
            <Project {...props}/>
            <Tasks {...props}/>        
        </>
    )

}

export default ProjectDetails;