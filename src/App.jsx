import SideBar from "./Components/SideBar";
import MainBar from "./Components/MainBar";
import CreateProject from "./Components/CreateProject";
import ProjectDetails from "./Components/ProjectDetails";

import { useState } from 'react'

const defaultProjects = [
    {
      title: "Learning React",
      description: "sbndlsbd sdfklsdnf",
      date: "15/11/2025",
      tasks: [
        "components",
        "state"
      ]
    },
    {
      title: "Mastering React",
      description: "sbndlsbd sdfklsdnf",
      date: "15/11/2025",
      tasks: [
        "components",
        "state"
      ]
    }
]

function App() {

  const[isCreateProject, setIsCreateProject] = useState(false);
  const[projects, setProjects] = useState(defaultProjects);


  function showCreateProjectForm(){
    setIsCreateProject(true);
  }

  function hideCreateProjectFrom(){
    setIsCreateProject(false);
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onCreateProject={showCreateProjectForm} projectList={projects} />
      
      <section className="mt-24 w-2/3">
        <ProjectDetails />
        {/* { !isCreateProject && <MainBar onCreateProject={showCreateProjectForm} /> }
        { isCreateProject && <CreateProject onHideCreateForm={hideCreateProjectFrom} />}  */}
      </section>
    </main>
  );
}

export default App;
