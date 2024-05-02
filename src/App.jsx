import { useState } from "react";
import Projects from "./components/Projects";
import SideMenu from "./components/SideMenu";
import NewProjectForm from "./components/NewProjectForm";

function App() {
  const [displayNewProjectForm, setDisplayNewProjectForm] = useState(false);

  function handleDisplayNewProjectForm(displayForm) {
    setDisplayNewProjectForm(displayForm);
  }

  function handleFormSave() {
    handleDisplayNewProjectForm(false);
  }

  return (
    <div className="flex">
      <SideMenu onNewProjectClick={() => handleDisplayNewProjectForm(true)} />
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
