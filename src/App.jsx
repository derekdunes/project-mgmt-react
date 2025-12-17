import SideBar from "./Components/SideBar";
import MainBar from "./Components/MainBar";
import CreateProject from "./Components/CreateProject";

import { useState } from 'react'

function App() {

  const[isCreateProject, setIsCreateProject] = useState(false);


  function showCreateProjectForm(){
    setIsCreateProject(true);
  }

  function hideCreateProjectFrom(){
    setIsCreateProject(false);
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onCreateProject={showCreateProjectForm}/>
      <section className="mt-24 w-2/3">
        { !isCreateProject && <MainBar onCreateProject={showCreateProjectForm} /> }
        { isCreateProject && <CreateProject onHideCreateForm={hideCreateProjectFrom} />} 
      </section>
    </main>
  );
}

export default App;
