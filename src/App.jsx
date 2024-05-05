import { useState } from "react";
import Projects from "./components/Projects";
import SideMenu from "./components/SideMenu";
import NewProjectForm from "./components/NewProjectForm";

function App() {
  const [displayNewProjectForm, setDisplayNewProjectForm] = useState(false);
  const [projects, setProjects] = useState([]);

  function handleDisplayNewProjectForm(displayForm) {
    setDisplayNewProjectForm(displayForm);
  }

  function handleFormSave(newProject) {
    setProjects([
      ...projects,
      {
        projectTitle: newProject.projectTitle,
        projectDescription: newProject.projectDescription,
        projectDate: newProject.projectDate,
        projectTasks: [],
      },
    ]);

    handleDisplayNewProjectForm(false);
  }

  return (
    <div className="flex">
      <SideMenu
        onNewProjectClick={() => handleDisplayNewProjectForm(true)}
        projects={projects}
      />
      {displayNewProjectForm ? (
        <NewProjectForm
          onFormSave={handleFormSave}
          onFormCancel={() => handleDisplayNewProjectForm(false)}
        />
      ) : (
        <Projects />
      )}
    </div>
  );
}

export default App;
