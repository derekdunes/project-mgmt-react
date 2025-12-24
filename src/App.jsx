import SideBar from "./Components/SideBar";
import MainBar from "./Components/MainBar";
import CreateProject from "./Components/CreateProject";
import ProjectDetails from "./Components/ProjectDetails";

import { useState } from "react";

const defaultProjects = [
  {
    title: "Learning React",
    description: "sbndlsbd sdfklsdnf",
    date: "15/11/2025",
    tasks: ["components", "state"],
  },
  {
    title: "Mastering React",
    description: "sbndlsbd sdfklsdnf",
    date: "15/11/2025",
    tasks: ["components", "state"],
  },
];

function App() {
  const [isCreateProject, setIsCreateProject] = useState(false);
  const [projects, setProjects] = useState(defaultProjects);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  function showCreateProjectForm() {
    setIsCreateProject(true);
  }

  function hideCreateProjectFrom() {
    setIsCreateProject(false);
  }

  function handleSelectedProjectIndex(index) {
    setSelectedProjectIndex(index);
  }

  function handleDeleteTask(projectIndex, taskIndexToRemove) {
    setProjects((oldProject) => {
      const updatedProjects = oldProject.map((project, index) => {
        if (index === projectIndex) {
          return {
            ...project,
            tasks: project.tasks.filter((_, i) => i !== taskIndexToRemove),
          };
        }
        return project;
      });

      return updatedProjects;
    });
  }

  function handleAddTask(projectIndex, newTask) {
    setProjects((oldProject) => {
      const updatedProjects = oldProject.map((project, index) => {
        if (index === projectIndex) {
          return {
            ...project,
            tasks: [...project.tasks, newTask], // New tasks array
          };
        }
        return project;
      });

      return updatedProjects;
    });
  }

  function handleAddProject(newProject) {
    setProjects((oldProject) => {
      const updatedProjects = [...oldProject, newProject];

      return updatedProjects;
    });
  }

  function handleDeleteProject(projectIndexToRemove) {
    setProjects((oldProjects) => {
      const updatedProjects = oldProjects.filter(
        (_, i) => i !== projectIndexToRemove
      );

      return updatedProjects;
    });

    handleSelectedProjectIndex(0);
  }

  const noProjectYet = projects.length === 0;

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        projectList={projects}
        onCreateProject={showCreateProjectForm}
        setSelectedIndex={handleSelectedProjectIndex}
      />

      <section className="mt-24 w-2/3">
        {isCreateProject && (
          <CreateProject
            onHideCreateForm={hideCreateProjectFrom}
            addNewProject={handleAddProject}
          />
        )}
        {!isCreateProject && noProjectYet && (
          <MainBar onCreateProject={showCreateProjectForm} />
        )}
        {!isCreateProject && !noProjectYet && (
          <ProjectDetails
            projectIndex={selectedProjectIndex}
            project={projects[selectedProjectIndex]}
            AddTask={handleAddTask}
            deleteTask={handleDeleteTask}
            deleteProject={handleDeleteProject}
          />
        )}
      </section>
    </main>
  );
}

export default App;
