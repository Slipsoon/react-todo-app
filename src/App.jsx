import { useState } from "react";
import Projects from "./components/Projects";
import SideMenu from "./components/SideMenu";
import NewProjectForm from "./components/NewProjectForm";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [displayProjectDetailsForm, setDisplayProjectDetailsForm] = useState();
  const [displayNewProjectForm, setDisplayNewProjectForm] = useState(false);
  const [projects, setProjects] = useState([]);

  function handleDisplayNewProjectForm(displayForm) {
    setDisplayNewProjectForm(displayForm);
  }

  function handleProjectDetailsClick(project) {
    setDisplayProjectDetailsForm(project);
  }

  function handleProjectDelete(project) {
    setProjects((projects) => {
      const newExistingProjects = projects.filter((p) => p !== project);
      return getProjectsDeepClone(newExistingProjects);
    });

    setDisplayProjectDetailsForm(undefined);
  }

  function handleProjectDetailsAddTask() {
    setDisplayProjectDetailsForm((currentProject) => {
      return { ...currentProject };
    });
  }

  function handleFormSave(newProject) {
    setProjects((currentProjectsState) => {
      let newProjectsState = getProjectsDeepClone(currentProjectsState);
      newProjectsState.push({
        projectTitle: newProject.projectTitle,
        projectDescription: newProject.projectDescription,
        projectDate: newProject.projectDate,
        projectTasks: [],
      });

      return newProjectsState;
    });

    handleDisplayNewProjectForm(false);
  }

  function getProjectsDeepClone(projects) {
    return [
      ...projects.map((p) => ({
        ...p,
        projectTasks: [...p.projectTasks],
      })),
    ];
  }

  return (
    <div className="flex">
      <SideMenu
        onNewProjectClick={() => handleDisplayNewProjectForm(true)}
        onProjectDetailsClick={handleProjectDetailsClick}
        projects={projects}
      />
      {displayNewProjectForm ? (
        <NewProjectForm
          onFormSave={handleFormSave}
          onFormCancel={() => handleDisplayNewProjectForm(false)}
        />
      ) : displayProjectDetailsForm ? (
        <ProjectDetails
          project={displayProjectDetailsForm}
          onProjectDetailsDelete={handleProjectDelete}
          onProjectDetailsTaskAdd={handleProjectDetailsAddTask}
        />
      ) : (
        <Projects
          onCreateNewProject={() => handleDisplayNewProjectForm(true)}
        />
      )}
    </div>
  );
}

export default App;
