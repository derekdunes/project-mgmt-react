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
    description: "sdfsdfsdf sdfklsdfssdnf",
    date: "14/10/2026",
    tasks: ["components", "state", "props"]
  },
];

function App() {

  const [projects, setProjects] = useState(defaultProjects);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(undefined);

  function showCreateProjectForm() {
    setSelectedProjectIndex(null);
  }

  function hideCreateProjectFrom() {
    setSelectedProjectIndex(undefined);
  }

  function handleSelectedProjectClick(index) {
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

    hideCreateProjectFrom();
  }

  function handleDeleteProject(projectIndexToRemove) {
    setProjects((oldProjects) => {
      const updatedProjects = oldProjects.filter(
        (_, i) => i !== projectIndexToRemove
      );

      return updatedProjects;
    });

    handleSelectedProjectClick(undefined);
  }

  const isNotNullorUndefined = projects.length > 0 && (selectedProjectIndex !== null && selectedProjectIndex !== undefined); 

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        projectList={projects}
        onCreateProject={showCreateProjectForm}
        selectedIndex={selectedProjectIndex}
        handleProjectClick={handleSelectedProjectClick}
      />

      <section className="mt-24 w-2/3">
        {selectedProjectIndex === null && (
          <CreateProject
            onHideCreateForm={hideCreateProjectFrom}
            addNewProject={handleAddProject}
          />
        )}
        {selectedProjectIndex === undefined && (
          <MainBar onCreateProject={showCreateProjectForm} />
        )}
        {isNotNullorUndefined && (
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
